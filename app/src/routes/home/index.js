"use strict";

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.render('home/index.ejs');
});

router.get('/login', (req, res) => {
    return res.render("home/login.ejs");
});

router.get('/signup', (req, res) => {
    return res.render("home/signup.ejs");
});

module.exports = router;