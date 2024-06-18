import {NextFunction, Request, Response} from "express";


 export abstract  class BaseController {


   protected constructor() {
     
   }

   ValidateQueryId(req: Request, res: Response, next: NextFunction) {

    if (!!req.params.id && +req.params.id > 0) {
      next();
    } else {
      res.json("o Id informado está no formato errado, Informe o Id para continuar.");
    }

  }

}
