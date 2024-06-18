import {Request, Response, NextFunction} from 'express';
import {StatusCodes} from "http-status-codes";
import {Cidade} from "../../shared/models/cidades";
import {BaseController} from "../base-controller";

class CidadeController extends BaseController{

  constructor() {
    super();
  }

  async GetById(req: Request, res: Response, next: NextFunction) {

    res.status(StatusCodes.OK).send(`GetById: ${req.params.id}`);

  }

  async GetAll(req: Request, res: Response, next: NextFunction) {

    res.status(StatusCodes.OK).send("GetAll");

  }

  async Create(req: Request<{}, {}, Cidade>, res: Response, next: NextFunction) {

    res.status(StatusCodes.CREATED).send("Create");

  }

  async Update(req: Request<{}, {}, Cidade>, res: Response, next: NextFunction) {

    res.status(StatusCodes.NO_CONTENT).json();

  }

  async Delete(req: Request, res: Response, next: NextFunction) {

    res.status(StatusCodes.NO_CONTENT).json();

  }

}

export default new CidadeController();