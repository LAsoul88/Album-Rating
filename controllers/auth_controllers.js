const express = require('express');
const router = express.Router();
const { Album, User } = require('../models');

router.get('/register', (req, res) => {
    return res.send('register page goes here');
});

router.get('/login', (req, res) => {
    return res.render('auth/login');
});

module.exports = router;