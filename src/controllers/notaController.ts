import { Request,Response} from "express";
import Nota from "../models/Nota";



export const listarNotas = async (req:Request,res:Response) => {
    let notas = await Nota.find({});
    res.json(notas)
}


export const criarNota = async (req:Request,res:Response) => {
    let novaNota = new Nota();
    let {titulo,mensagem} = req.body;
    if(novaNota){
        novaNota.titulo = titulo;
        novaNota.mensagem = mensagem;
        await novaNota.save();
        res.json({success:true});
    }else{
        res.json({erro:"Erro ao criar nota"});
    }
    
}

export const deletarNota = async (req:Request,res:Response) => {
    let id = req.params.id;
    if(id){
        await Nota.findByIdAndDelete(id);
        res.json({success:true});
    }else{
        res.json({erro:"Erro ao deletar nota"})
    }
}