import express from "express";
import dotenv from 'dotenv';

import userRoute from "./src/routes/user.route.js";
import connectDatabase from "./src/database/db.js";


dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

connectDatabase();

app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`App rodando na porta ${port}`));