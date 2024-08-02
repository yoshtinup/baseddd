import express from "express";
import signale from "signale";

import { adminRouter } from "./v1/router/adminRouter.js";
import { maestroRouter } from "./v1/router/maestroRouter.js";
import { alumnoRouter } from "./v1/router/alumnoRouter.js";

import cors from "./node_modules/cors/lib/index.js";

const app = express()
app.use(cors());
app.use(express.json())
app.use("/api/admin",adminRouter);
app.use("/api/maestro",maestroRouter);
app.use("/api/alumno",alumnoRouter);

app.listen(3002, ()=> {
    signale.success("Server online in port 3002")
})