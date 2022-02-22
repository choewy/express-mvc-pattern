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
    fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req)
    })
        .then(res => res.json())
        .then(res => {
            const { success, message } = res;
            if (success) return location.href = '/';
            alert(message);
        })
        .catch(console.error);
};
