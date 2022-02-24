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

    static #getUsers(data, fields) {
        const users = JSON.parse(data);
        if (!fields.length) return users;

        const newUsers = [];
        users.forEach(user => {
            const newUser = {};
            fields.forEach(field => {
                if (user.hasOwnProperty(field)) {
                    newUser[field] = user[field];
                }
            })
            newUsers.push(newUser);
        });
        return newUsers;
    };

    static async getUserInfo(id) {
        return fileSystem.readFile(filePath)
            .then(data => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    };

    static async getUsers(...fields) {
        return fileSystem.readFile(filePath)
            .then(data => {
                return this.#getUsers(data, fields);
            })
            .catch(console.error);
    };

    static async save(client) {
        const users = await this.getUsers();
        if (users.find(user => user.id === client.id)) {
            throw "이미 존재하는 아이디입니다.";
        }
        users.push(client)
        await fileSystem.writeFile(filePath, JSON.stringify(users));
        return { success: true };
    };
};

module.exports = UserStorage;