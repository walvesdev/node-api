import { Router, Request, Response, NextFunction } from 'express';
import {StatusCodes} from "http-status-codes";
import {Cidade} from "../../shared/models/Cidades";
import {validate} from "class-validator";

class CidadeController {

  constructor() {

  }
  async GetById(req: Request, res: Response, next: NextFunction) {

    res.status(StatusCodes.OK).send(`GetById: ${req.params.id}`);

  }

  async GetAll(req: Request, res: Response, next: NextFunction) {

    res.status(StatusCodes.OK).send("GetAll");

  }

  async Create(req: Request<{},{},Cidade>, res: Response, next: NextFunction) {

    let cidade = req.body;

    // const errors = makeValidateBody(req.body);
    //
    // if (errors.length) {
    //   next(new Error(errors.toString()));
    //   return;
    // }
    
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