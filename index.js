const express = require("express");

const app = express();

const userRouter = require("./routes/userRouter");

app.use("/user", userRouter);

app.use(express.json());

app.listen(3000);
