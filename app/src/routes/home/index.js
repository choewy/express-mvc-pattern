"use strict";

const express = require('express');
const router = express.Router();
const controller = require('./index.controller');

// RENDER
router.get('/', controller.render.index);
router.get('/login', controller.render.login);
router.get('/signup', controller.render.signup);

// PROCESS
router.post('/login', controller.process.login);
router.post('/signup', controller.process.signup);

module.exports = router;