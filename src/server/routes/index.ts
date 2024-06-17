import {Router} from "express";
import CidadeController from "../controller/cidades/CidadeController";
import validationMiddleware from "../shared/middlewares/ValidateBody";
import {Cidade} from "../shared/models/Cidades";

const router = Router();

router.get('/cidade', CidadeController.GetAll)
  .get('/cidade/:id', CidadeController.GetById)
  .post('/cidade', validationMiddleware(Cidade), CidadeController.Create)
  .put('/cidade', validationMiddleware(Cidade), CidadeController.Update)
  .delete('/cidade/:id', CidadeController.Delete);

export {router}                             