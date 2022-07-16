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
exports.updateToOrder = exports.getToOrderById = exports.getAllToOrder = exports.deleteToOrder = exports.createToOrder = void 0;
const order_1 = require("../models/order");
const createToOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var order = yield order_1.Order.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: "Order created successfully", data: order });
});
exports.createToOrder = createToOrder;
const deleteToOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedorder = yield order_1.Order.findByPk(id);
    yield order_1.Order.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "Order deleted successfully", data: deletedorder });
});
exports.deleteToOrder = deleteToOrder;
const getAllToOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allorder = yield order_1.Order.findAll();
    return res
        .status(200)
        .json({ message: "Orderfetched successfully", data: allorder });
});
exports.getAllToOrder = getAllToOrder;
const getToOrderById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const order = yield order_1.Order.findByPk(id);
    return res
        .status(200)
        .json({ message: "Order fetched successfully", data: order });
});
exports.getToOrderById = getToOrderById;
const updateToOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield order_1.Order.update(Object.assign({}, req.body), { where: { id } });
    const updatedorder = yield order_1.Order.findByPk(id);
    return res
        .status(200)
        .json({ message: "order updated successfully", data: updatedorder });
});
exports.updateToOrder = updateToOrder;
