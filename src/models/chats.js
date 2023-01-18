const Pool = require('../config/db');

const store = (data) => {
  const { receiver, sender, message } = data;
  console.log(data);
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO chats (sender_id, receiver_id, message, created_at, updated_at) 
        VALUES ('${sender}', '${receiver}', '${message}', NOW(), NOW())`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
};

const list = (sender, receiver) => {
  return new Promise((resolve, reject) => {
    console.log(sender, receiver, 'test');
    Pool.query(
      `SELECT chats.id, chats.message, 
          userSender.username AS sender, 
          userReceiver.username AS receiver,
          to_char( chats.created_at, 'HH:MI DD/Mon/YYYY' ) AS created_at
        FROM chats as chats
        LEFT JOIN users AS userSender ON chats.sender_id=userSender.id
        LEFT JOIN users AS userReceiver ON chats.receiver_id=userReceiver.id
        WHERE
        (sender_id='${sender}' AND receiver_id='${receiver}')
        OR (sender_id='${receiver}' AND receiver_id='${sender}')`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
};

module.exports = {
  list,
  store,
};
