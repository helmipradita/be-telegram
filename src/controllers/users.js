const { response } = require(`../middleware/common`);
const {
  register,
  findEmail,
  findIdUsers,
  updateUsers,
  getAll,
  getAllById,
} = require(`../models/users`);
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { generateToken, refreshToken } = require(`../helpers/auth`);
const refreshTokens = [];
const jwt = require('jsonwebtoken');
const email = require(`../middleware/email`);
const cloudinary = require('../config/cloudinary');

const Port = process.env.PORT;
const Host = process.env.HOST;

const usersControllers = {
  register: async (req, res, next) => {
    let {
      rows: [users],
    } = await findEmail(req.body.email);

    if (users) {
      return response(res, 404, false, 'email already use register fail');
    }

    let digits = '0123456789';
    let otp = '';
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }

    let salt = bcrypt.genSaltSync(10);
    let password = bcrypt.hashSync(req.body.password);
    let data = {
      id: uuidv4(),
      username: req.body.username,
      email: req.body.email,
      password,
    };
    try {
      const result = await register(data);
      if (result) {
        let verifUrl = `http://${Host}:${Port}/users/${req.body.email}/${otp}`;
        let sendEmail = email(data.email, otp, verifUrl, data.username);
        if (sendEmail == 'email not sent!') {
          return response(res, 404, false, null, 'register fail');
        }
        response(
          res,
          200,
          true,
          { email: data.email },
          'register success please check your email'
        );
      }
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, ' register fail');
    }
  },
  login: async (req, res, next) => {
    let {
      rows: [users],
    } = await findEmail(req.body.email);

    if (!users) {
      return response(res, 404, false, null, 'email not found');
    }

    if (users.verif == 0) {
      return response(res, 404, false, null, 'account not verified');
    }

    const password = req.body.password;
    const validation = bcrypt.compareSync(password, users.password);
    if (!validation) {
      return response(res, 404, false, null, 'wrong password');
    }

    delete users.password;
    let payload = {
      id: users.id,
      username: users.username,
      email: users.email,
    };
    let accessToken = generateToken(payload);
    let refToken = refreshToken(payload);

    users.token = accessToken;
    users.refreshToken = refToken;
    refreshTokens.push(refreshToken);

    response(res, 200, true, users, 'login success');
  },
  profile: async (req, res, next) => {
    try {
      const id = req.payload.id;
      const {
        rows: [users],
      } = await findIdUsers(id);

      delete users.password;
      response(res, 200, true, users, 'get data users success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'get data users fail');
    }
  },
  update: async (req, res, next) => {
    try {
      const { username, email } = req.body;
      const { id } = req.payload;

      const {
        rows: [users],
      } = await findIdUsers(id);

      const dataUsers = {
        id,
        username,
        email,
      };

      if (req.file) {
        const image = await cloudinary.uploader.upload(req.file.path, {
          folder: 'telegram-app',
        });

        dataUsers.photo = image.url;
      } else {
        dataUsers.photo = users.photo;
      }

      await updateUsers(dataUsers);
      response(res, 200, true, dataUsers, 'update data users success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'update data users failed');
    }
  },
  getAll: async (req, res) => {
    try {
      const result = await getAll();

      if (result) {
        response(res, 200, true, result.rows, 'get all users success');
      }
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, ' get all users failed');
    }
  },
  getAllById: async (req, res) => {
    try {
      const { id } = req.payload;

      const result = await getAllById(id);

      if (result) {
        response(res, 200, true, result.rows, 'get all users success');
      }
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, ' get all users failed');
    }
  },
};

exports.usersControllers = usersControllers;
