
import { Request, Response } from 'express';

import { AppDataSource } from "../data-source"
import { Car } from '../entity/Car';

const carRepository = AppDataSource.getRepository(Car)


export class CarController {
    static getAllCars = async (req: Request, res: Response) => {
        try {
            /// all cars with 1st image
            const cars = await carRepository.find({
                relations: {
                    Images: true
                }
            })

            res.status(200).send({
                cars
            })
        } catch (error) {
            res.status(400).send(error)
        }
    }

    static getById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            console.log(req.params.id)
            const car = await carRepository.find({
                relations: {
                    Images: true
                },
                where: {
                    id: +id
                }
            })

            if (!car) { throw new Error("There is no car") }
            res.status(200).send({
                car
            })


        } catch (error) {
            res.status(400).send(error)
        }
    }

}

