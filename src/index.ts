import bodyParser from "body-parser";
import * as dotenv from "dotenv";

import { Account } from "../classes/account";

dotenv.config();

import express from "express";
import { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 8081;

app.use(bodyParser.json());

const account = new Account();

app.get("/", (req: Request, res: Response) => {
  res.send("hello world!");
});

app.post("/deposit", (req: Request, res: Response) => {
  const { amount } = req.body;
  const success = account.deposit(amount);
});

app.listen(PORT, () => {
  console.log(`Application started on port ${PORT}!`);
});
