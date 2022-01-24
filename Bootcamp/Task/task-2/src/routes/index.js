const express = require('express')

const router = express.Router()

// Controller
const {
  addUsers,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/user')

const { register, login } = require('../controllers/auth')

// Middleware
const { auth } = require('../middlewares/auth')
// import middleware here
const { uploadFile } = require('../middlewares/uploadFile')

// Route
router.get('/users', getUsers)
router.get('/user/:id', auth, getUser)
router.patch('/user/:id', auth, uploadFile, updateUser)
router.delete('/user/:id', deleteUser)

router.post('/register', register)
router.post('/login', login)

module.exports = router
