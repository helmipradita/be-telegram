const Pool = require('../config/db');

const register = (data) => {
  const { id, username, email, password } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO users (id, username, email, password) 
      VALUES('${id}', '${username}', '${email}', '${password}')`,
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

const updateUsers = (data) => {
  const { id, username, email, photo } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE users 
      SET id='${id}', username='${username}', email='${email}', photo='${photo}'  
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

const getAll = () => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const getAllById = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT * FROM users 
      WHERE id NOT IN ('${id}')`,
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
  updateUsers,
  getAll,
  getAllById,
};
