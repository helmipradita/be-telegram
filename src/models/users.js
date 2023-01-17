const Pool = require('../config/db');

const register = (data) => {
  const { id, name, email, password } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO users (id, name, email, password) 
      VALUES('${id}', '${name}', '${email}', '${password}')`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const findEmail = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users where email='${email}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const findIdUsers = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users where id='${id}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const verif = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE users SET verif=1 WHERE email='${email}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const updateUsers = (data) => {
  const { id, name, email, photo } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE users 
      SET id='${id}', name='${name}', email='${email}', photo='${photo}'  
      WHERE id='${id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

module.exports = {
  register,
  findEmail,
  findIdUsers,
  verif,
  updateUsers,
};
