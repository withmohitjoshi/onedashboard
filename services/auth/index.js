import express from "express";
import dotenv from "dotenv";
import { default as authRouter } from "./src/routes/index.js";
import { ROUTES } from "./src/utils/constants.js";

const app = express();
const env = process.env.NODE_ENV;
dotenv.config({ path: `.env.${env}` });
app.use(express.json());

app.use(ROUTES.AUTH, authRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Auth service is running on port ${PORT}`));
