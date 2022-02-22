"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    };

    async login() {
        const body = this.body;
        const data = await UserStorage.getUserInfo(body.id);

        if (Object.keys(data).length) {
            if (data.id === body.id && data.passwd === body.passwd) {
                return { success: true };
            }
            return { success: false, message: "비밀번호가 일치하지 않습니다." };
        }
        return { success: false, message: "존재하지 않는 아이디입니다." };
    };
};

module.exports = User;