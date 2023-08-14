import bodyParser from "body-parser";
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 8081;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello world!");
});

app.listen(PORT, () => {
  console.log(`Application started on port ${PORT}!`);
});
