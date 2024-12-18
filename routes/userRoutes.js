const express = require('express');
const { loginUser, registerUser, currentUser } = require('../controllers/userController');
const validateTokenHandler = require('../middleware/validateTokenHandler');

const router = express.Router();

router.post('/login', loginUser);

router.post('/register',registerUser);

router.get('/current', validateTokenHandler ,currentUser);

module.exports = router;
