
import express from "express";
import { Express, Request, Response } from 'express'
import path from 'path'
import router from "./routes/Router";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import cors from "cors";
import { Car } from "./entity/Car";
import { Image } from "./entity/Image";
import { userInfo } from "os";
import { Terminy } from "./entity/Terminy";
import { Cennik } from "./entity/Cenniki";


const app: Express = express();
app.use(express.static('activate'))
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors())
app.use(router)



AppDataSource.initialize().then(async () => {

    const path = require('path')
    app.use('/carImages/', express.static(path.join(__dirname, 'carImages')))
    // console.log(path.join(__dirname, 'activate'))
    // !!! DEFAULT CARS

    const cennik = new Cennik();
    cennik.Cena = 200

    const car = new Car()
    car.Colour = "blue"
    car.FuelType = "disel"
    car.MakeYear = new Date(1997)
    car.Cennik = cennik
    car.Model = "Volvo v50"
    //cennik
    await AppDataSource.manager.save(cennik)
    const image1 = new Image()
    image1.Title = "1"
    image1.Url = "http://localhost:3005/carImages/1/1.jpg"
    await AppDataSource.manager.save(image1)
    const image2 = new Image()
    image2.Title = "2"
    image2.Url = "http://localhost:3005/carImages/1/2.jpeg"
    await AppDataSource.manager.save(image2)
    // terminy
    // const termin1 = new Terminy();
    // termin1.DataStart = new Date("2022-09-14")
    // termin1.DataZwrotu = new Date("2022-09-16")
    // await AppDataSource.manager.save(termin1)
    car.Images = [image1, image2]
    // car.Lents = [termin1]
    await AppDataSource.manager.save(car)




}).catch(error => console.log(error))

app.listen(3005, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${3005}`);
});
