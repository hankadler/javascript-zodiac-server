import cors from "cors";
import express from "express";
import morgan from "morgan";
import config from "./config";
import handleError from "./wares/handleError";

const app = express();

/* wares */
if (config.env === "dev") app.use(morgan("dev"));
app.use(express.json({ limit: "16mb" }));
app.use(express.urlencoded({ extended: false, limit: "16mb" }));
app.use(cors());

/* routes */
app.use(express.static("../client/build"));
app.use(handleError(config.env));

export default app;
