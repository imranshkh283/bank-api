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
  res.json({ message: "Deposit successful" });
});

app.post("/withdraw", (req: Request, res: Response) => {
  const { amount } = req.body;
  if (amount < 0) {
    return res.json({ message: "Amount cannot be negative" });
  } else {
    const success = account.withdraw(amount);
    res.json({ message: "Withdraw successful" });
  }
});

app.get("/checkBalance", (req: Request, res: Response) => {
  const bal = account.displayBalance();
  res.json({ message: "Balance is " + bal });
});

app.get("/checkLog", (req: Request, res: Response) => {
  const log = account.displayLog();
  res.json({ message: log });
});

app.listen(PORT, () => {
  console.log(`Application started on port ${PORT}!`);
});
