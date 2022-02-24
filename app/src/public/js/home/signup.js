"use strict";

const id = document.querySelector('#id'),
    name = document.querySelector('#name'),
    passwd = document.querySelector('#passwd'),
    confirmPasswd = document.querySelector('#passwd-confirm'),
    btn = document.querySelector('#btn');

btn.addEventListener('click', signup);

function signup() {
    if (id.value === "") return alert('아이디를 입력하세요.');
    if (name.value === "") return alert('이름을 입력하세요.');
    if (passwd.value === "") return alert('비밀번호를 입력하세요.');
    if (passwd.value !== confirmPasswd.value) return alert('비밀번호가 일치하지 않습니다.');

    const req = {
        id: id.value,
        name: name.value,
        passwd: passwd.value
    };

    fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req)
    })
        .then(res => res.json())
        .then(res => {
            const { success, message } = res;
            if (success) return location.href = '/login';
            alert(message);
        })
        .catch(console.error);
};