import { Sequelize } from "sequelize-typescript";
import { Order } from "../models/order";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "farhan",
  database: "orde",
  logging: false,
  models: [Order],
});

export default connection;