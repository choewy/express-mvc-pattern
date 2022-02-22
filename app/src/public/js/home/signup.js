"use strict";

const id = document.querySelector('#id'),
    name = document.querySelector('#name'),
    passwd = document.querySelector('#passwd'),
    confirmPasswd = document.querySelector('#passwd-confirm'),
    btn = document.querySelector('#btn');

btn.addEventListener('click', signup);

function signup() {
    const req = {
        id: id.value,
        name: id.value,
        passwd: passwd.value,
        confirmPasswd: confirmPasswd.value
    }
    console.log(req);
};