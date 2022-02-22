"use strict";

const express = require('express');
const router = express.Router();
const controller = require('./index.controller');

router.get('/', controller.render.index);
router.get('/login', controller.render.login);
router.get('/signup', controller.render.signup);

module.exports = router;