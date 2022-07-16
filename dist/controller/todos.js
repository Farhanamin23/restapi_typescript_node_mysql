"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.getTodoById = exports.getAllToDo = exports.deleteToDo = exports.createToDo = void 0;
const todos_1 = require("../models/todos");
const createToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var order = yield todos_1.Order.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: "Todo created successfully", data: order });
});
exports.createToDo = createToDo;
const deleteToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedorder = yield todos_1.Order.findByPk(id);
    yield todos_1.Order.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "Order deleted successfully", data: deletedorder });
});
exports.deleteToDo = deleteToDo;
const getAllToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allorder = yield todos_1.Order.findAll();
    return res
        .status(200)
        .json({ message: "Todo fetched successfully", data: allorder });
});
exports.getAllToDo = getAllToDo;
const getTodoById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const order = yield todos_1.Order.findByPk(id);
    return res
        .status(200)
        .json({ message: "Order fetched successfully", data: order });
});
exports.getTodoById = getTodoById;
const updateTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield todos_1.Order.update(Object.assign({}, req.body), { where: { id } });
    const updatedorder = yield todos_1.Order.findByPk(id);
    return res
        .status(200)
        .json({ message: "order updated successfully", data: updatedorder });
});
exports.updateTodo = updateTodo;
