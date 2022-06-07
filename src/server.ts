import express, {Request,Response, urlencoded} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import {mongoDb} from './database/mongodb';
import ApiRoutes from './routes/api';

dotenv.config()
const server = express();


server.use(urlencoded({extended:true}));
server.use(cors({}));

mongoDb();

server.use('/api',ApiRoutes);

server.use((req:Request,res:Response)=>{
    res.status(404).send("Página não encontrada");
});


server.listen(process.env.SERVER_PORT);