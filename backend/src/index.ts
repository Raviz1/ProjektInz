import { AppDataSource } from "./data-source"
import { User } from "./entity/User"


import express from "express";
import { Express, Request, Response } from 'express'



const app: Express = express();

AppDataSource.initialize().then(async () => {

    app.get('/', (req: Request, res: Response) => {
        res.send('Express + TypeScript Server');
    });

    app.listen(3005, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${3005}`);
    });
    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
