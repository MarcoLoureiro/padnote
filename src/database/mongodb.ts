import { connect } from "mongoose";
import dotenv from 'dotenv';


dotenv.config();
export const mongoDb = async () => {
    try {
        console.log("Conectando ao banco...");
        await connect(process.env.DATABASE_URL as string);
        console.log("Conectado!");
    } catch (e) {
        console.log("Erro ao conectar ao banco");
    }
}