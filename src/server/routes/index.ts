import {Router} from "express";
import CidadeController from "../controller/cidade/cidade-controller";
import validationBody from "../shared/middlewares/valiadate-body";
import {Cidade} from "../shared/models/cidades";

const router = Router();

router
  .get('/cidade', CidadeController.GetAll)
  .get('/cidade/:id', CidadeController.ValidateQueryId, CidadeController.GetById)
  .delete('/cidade/:id', CidadeController.ValidateQueryId, CidadeController.Delete)
  .post('/cidade', validationBody(Cidade), CidadeController.Create)
  .put('/cidade', validationBody(Cidade), CidadeController.Update);

export {router}                             