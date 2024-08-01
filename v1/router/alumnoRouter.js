import express from 'express'
import signale from 'signale';
import { alumnoController } from '../controllers/alumnoController.js';
export const alumnoRouter = express.Router();


alumnoRouter.get("/", alumnoController.getAllProducts);
alumnoRouter.get("/:id", alumnoController.getOneProduct);
alumnoRouter.post("/", alumnoController.createNewProduct);
alumnoRouter.put("/:id",alumnoController.updateOneProduct);
alumnoRouter.delete("/:id",alumnoController.deleteOneProduct);