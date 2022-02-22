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

};

module.exports = { render, process };