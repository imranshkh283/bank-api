import bodyParser from "body-parser";
import * as dotenv from "dotenv";

import { SavingAccount } from "../classes/saving_account";

dotenv.config();

import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 8081;

app.use(bodyParser.json());

const account = new SavingAccount();

app.get("/", (req: Request, res: Response) => {
  res.send("hello world!");
});

app.post("/createAccount", (req: Request, res: Response) => {
  const { accountNumber } = req.body;
  account.createAccount(accountNumber);
  res.json({ message: "Account created" });
});

app.get("/showAccount", (req: Request, res: Response) => {
  res.json(account.getAccount());
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

app.post("/filterLog", (req: Request, res: Response) => {
  const { type } = req.body;
  const log = account.filterTransaction(type);
  res.json({ log });
});

app.listen(PORT, () => {
  console.log(`Application started on port ${PORT}!`);
});
