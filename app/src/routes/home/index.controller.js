"use strict";

const User = require("../../models/User");

const render = {
    index: (req, res) => {
        res.render('home/index.ejs');
    },
    login: (req, res) => {
        res.render('home/login.ejs');
    },
    signup: (req, res) => {
        res.render('home/signup.ejs');
    }
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    signup: async (req, res) => {
        const user = new User(req.body);
        const response = await user.signup();
        return res.json(response);
    }
};

module.exports = { render, process };