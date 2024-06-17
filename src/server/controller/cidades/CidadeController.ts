import { Router, Request, Response, NextFunction } from 'express';
import {StatusCodes} from "http-status-codes";

class CidadeController {

  constructor() {

  }
  async GetById(req: Request, res: Response, next: NextFunction) {

    res.status(StatusCodes.OK).send(`GetById: ${req.params.id}`);

  }

  async GetAll(req: Request, res: Response, next: NextFunction) {

    res.status(StatusCodes.OK).send("GetAll");

  }

  async Create(req: Request, res: Response, next: NextFunction) {

    res.status(StatusCodes.CREATED).send("Create");

  }

  async Update(req: Request, res: Response, next: NextFunction) {

    res.status(StatusCodes.NO_CONTENT);

  }

  async Delete(req: Request, res: Response, next: NextFunction) {

    res.status(StatusCodes.NO_CONTENT);

  }
  
}

export default new CidadeController();