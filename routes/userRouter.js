const express = require("express");
const zod = require("zod");

const router = express.Router();

const userSignInSchema = zod.object({
  username: zod.string(),
  password: zod.string().password().min(8),
  email: zod.string().email(),
});

router.post("/signin", (req, res) => {
  const body = req.body;
  const success = userSignInSchema.parse(body);
  if (!success) {
    res.send("Incorrect details format, please fill again");
  }
});

module.exports(router);
