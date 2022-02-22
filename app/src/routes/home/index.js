"use strict";

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send("홈 페이지");
});

router.get('/login', (req, res) => {
    return res.send("로그인 페이지");
});

router.get('/signup', (req, res) => {
    return res.send("회원가입 페이지");
});

module.exports = router;