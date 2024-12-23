const express = require("express");

const app = express();

const apiRouter = require("./routes/api");

app.use("/shorten", apiRouter);

app.use(express.json());

app.listen(3000);
