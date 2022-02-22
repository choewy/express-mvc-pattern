"use strict";

const http = require('http');
const app = http.createServer((req, res) => {
    const headers = { "Content-Type": "text/html; charset=utf-8" };
    res.writeHead(200, headers);
    if (req.url === "/") return res.end("메인 페이지");
    if (req.url === "/login") return res.end("로그인 페이지");
});

const port = 3000;
app.listen(port, () => {
    console.log(`http Server Running on port ${port}`);
});
