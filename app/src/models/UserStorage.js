"use strict";

const fileSystem = require('fs').promises;
const filePath = './src/database/users.json';

class UserStorage {

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const userInfo = users.find(user => user.id === id);
        if (!userInfo) return {};
        return userInfo;
    };

    static async getUserInfo(id) {
        return fileSystem.readFile(filePath)
            .then(data => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    };
};

module.exports = UserStorage;