"use strict";

const express = require('express');
const app = express();
const home = require('./src/routes/home');

app.use('/', home);

module.exports = app;