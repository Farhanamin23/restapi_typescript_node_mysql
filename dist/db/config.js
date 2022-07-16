"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const order_1 = require("../models/order");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "farhan",
    database: "orde",
    logging: false,
    models: [order_1.Order],
});
exports.default = connection;
