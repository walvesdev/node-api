import {Router} from "express";
import CidadeController from "../controller/cidades/CidadeController";

const router = Router();


router.get('/cidade', CidadeController.GetAll)
router.get('/cidade/:id', CidadeController.GetById)
router.post('/cidade', CidadeController.Create)
router.put('/cidade', CidadeController.Update)
router.delete('/cidade/:id', CidadeController.Delete)

export {router}                             