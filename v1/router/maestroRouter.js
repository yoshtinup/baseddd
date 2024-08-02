import express from 'express'
import signale from 'signale';

import { MaestroController } from '../controllers/maestroController.js';

export const maestroRouter = express.Router();

maestroRouter.get("/", MaestroController.getAllProducts);
maestroRouter.get("/:id", MaestroController.getOneProduct);
maestroRouter.post("/", MaestroController.createNewProduct);
maestroRouter.put("/:id",MaestroController.updateOneProduct);
maestroRouter.delete("/:id",MaestroController.deleteOneProduct);