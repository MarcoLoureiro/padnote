import { Router } from "express";
import * as NotaController from '../controllers/notaController';

const router = Router();


router.get("/notas",NotaController.listarNotas);
router.post("/notas/criar-nota",NotaController.criarNota);
router.delete("/notas/deletar-nota/:id",NotaController.deletarNota);



export default router;