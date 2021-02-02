import { json } from 'body-parser';
import express from 'express';
import routers from './routers';
import db from './db';

const { EXPRESS_PORT = 4000 } = process.env;

const app = express();

const init = async () => {
  await db.connect();

  app.use(json());
  app.use(routers);

  app.listen(EXPRESS_PORT, () => console.log(`app started at ${EXPRESS_PORT}`));
};

init();

export default app;
