import express, {NextFunction, Request, Response} from 'express';
import {router} from "./routes";
import 'dotenv/config';

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("/");
});

app.use(express.json());
app.use(router);

const jsonErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status).send({
    status: err.status,
    message: JSON.parse(err.message),
  });
  return next();
};
app.use(jsonErrorHandler);

export default app