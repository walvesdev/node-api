import {server} from "./server/server";
import express, {ErrorRequestHandler, NextFunction, Request, Response} from "express";
import {router} from "./server/routes";
import bodyParser from "body-parser";


server.use(express.json());
server.use(router);
server.use(bodyParser.json())


const jsonErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status).send({
    status: err.status,
    message: JSON.parse(err.message),
  });
  return next();
};
server.use(jsonErrorHandler);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server started on localhost:${PORT}`));