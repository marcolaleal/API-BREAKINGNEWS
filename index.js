import express from "express";
import userRoute from "./src/routes/user.route.js";


const app = express();

const port = 3000;

app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`App rodando na porta ${port}`));