const express = require(`express`);
const router = express.Router();
const { usersControllers } = require(`../controllers/users`);
const upload = require('../middleware/upload');
const { protect } = require('../middleware/auth');
let multer = require('multer');
let uploaded = multer();

//auth
router.post(`/register`, uploaded.array(), usersControllers.register);
router.post('/login', uploaded.array(), usersControllers.login);

//profile
router.get('/all', usersControllers.getAll);
router.get('/all/:id', protect, usersControllers.getAllById);
router.get('/profile', protect, usersControllers.profile);
router.put(
  '/profile',
  upload.single('photo'),
  protect,
  usersControllers.update
);

module.exports = router;
