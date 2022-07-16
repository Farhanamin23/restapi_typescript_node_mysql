import { RequestHandler } from "express";

import { Order } from "../models/order";

export const createToOrder: RequestHandler = async (req, res, next) => {
  var order = await Order.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Order created successfully", data: order });
};

export const deleteToOrder: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedorder: Order | null = await Order.findByPk(id);
  await Order.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "Order deleted successfully", data: deletedorder });
};

export const getAllToOrder: RequestHandler = async (req, res, next) => {
  const allorder: Order[] = await Order.findAll();
  return res
    .status(200)
    .json({ message: "Orderfetched successfully", data: allorder });
};

export const getToOrderById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const order: Order | null = await Order.findByPk(id);
  return res
    .status(200)
    .json({ message: "Order fetched successfully", data: order });
};

export const updateToOrder: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Order.update({ ...req.body }, { where: { id } });
  const updatedorder: Order | null = await Order.findByPk(id);
  return res
    .status(200)
    .json({ message: "order updated successfully", data: updatedorder });
};