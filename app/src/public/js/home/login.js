"use strict";

const id = document.querySelector('#id'),
    passwd = document.querySelector('#passwd'),
    btn = document.querySelector('#btn');

btn.addEventListener('click', login);

function login() {
    const req = {
        id: id.value,
        passwd: passwd.value
    }
    console.log(req);
};
