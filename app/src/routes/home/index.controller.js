"use strict";

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
    login: (req, res) => {
        console.log(req.body);
    },
    signup: (req, res) => {
        console.log(req.body);
    }
};

module.exports = { render, process };