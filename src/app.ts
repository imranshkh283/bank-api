import * as dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8081;

import express, { Request, Response } from "express";
const app = express();

class Server {
  constructor() {
    this.init();
    this.useMiddleware();
    this.useRoutes();
    this.listerServer();
  }
  init() {}
  useMiddleware() {}
  useRoutes() {
    app.get("/", (req: Request, res: Response) => {
      res.send("Hello World");
    });
  }
  listerServer() {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}

new Server();
