"use strict";

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send("메인 페이지");
});

app.get('/', (req, res) => {
    return res.send("로그인 페이지");
});

const port = 3000;
app.listen(port, () => {
    console.log(`express server running on port ${port}`);
});

