import { Router } from "express";

import {
  createToOrder,
  deleteToOrder,
  getAllToOrder,
  updateToOrder,
  getToOrderById,
} from "../controller/order";

const router = Router();

router.post("/", createToOrder);

router.get("/", getAllToOrder);

router.get("/:id", getToOrderById);

router.put("/:id", updateToOrder);

router.delete("/:id", deleteToOrder);

export default router;
