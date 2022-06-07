import { Schema,model,Model,connection } from "mongoose";


type NotaType = {
    titulo:string,
    mensagem:string
}


const schema = new Schema<NotaType>({
   titulo:{required:true,type:String},
   mensagem:{required:true,type:String} 
});


const modelName = "Nota";


export default (connection && connection.models[modelName])?
connection.models[modelName] as Model<NotaType>
:
model(modelName,schema);