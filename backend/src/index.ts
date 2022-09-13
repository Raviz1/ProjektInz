
import express from "express";
import { Express, Request, Response } from 'express'
import path from 'path'
import router from "./routes/Router";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import cors from "cors";

const app: Express = express();
app.use(express.static('activate'))
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors())



AppDataSource.initialize().then(async () => {

    app.use(router)
    const path = require('path')
    app.use('/activate/', express.static(path.join(__dirname, 'activate')))
    console.log(path.join(__dirname, 'activate'))
    app.listen(3005, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${3005}`);
    });

}).catch(error => console.log(error))
