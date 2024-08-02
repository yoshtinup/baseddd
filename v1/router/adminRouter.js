import express from 'express'
import signale from 'signale';
import { AdminController } from '../controllers/adminController.js';
export const adminRouter = express.Router();


adminRouter.get("/", AdminController.getAllProducts);
adminRouter.get("/:id", AdminController.getOneProduct);
adminRouter.post("/", AdminController.createNewProduct);
adminRouter.put("/:id",AdminController.updateOneProduct);
adminRouter.delete("/:id",AdminController.deleteOneProduct);