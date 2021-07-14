import * as express from "express";
import { json } from "body-parser";
import { mainRouter } from "./controllers/router";
import db from "./db-test";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use((req: any, _, next) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  req.db = db.knex;

  next();
});

app.use(json());

app.use(mainRouter);

export default app;
