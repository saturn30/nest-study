import * as express from "express";

import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;
  public port: number;

  constructor() {
    const app: express.Application = express();
    this.app = app;
    this.port = 8000;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    this.app.use(express.json());

    // 로깅 미들웨어
    this.app.use((req: express.Request, res: express.Response, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is logging middleware");
      return next();
    });

    this.setRoute();

    // 404 미들웨어
    this.app.use((req, res, next) => {
      console.log("this is error middleware");
      res.send({ error: "404 not found error" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
