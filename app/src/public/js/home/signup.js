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
    fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
        });
};