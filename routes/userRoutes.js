const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');



router.post('/api/register', userControllers.registerUser);
router.get('/api/users',  userControllers.getUsers);

module.exports = router;