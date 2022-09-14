import { AppDataSource } from "../data-source";
import { Terminy } from "../entity/Terminy";
import { Request, Response } from 'express';
import { Cennik } from "../entity/Cenniki";
import { LessThan, MoreThan } from "typeorm";

const terminyRepository = AppDataSource.getRepository(Terminy)


export class ReservationController {
    static reserveCar = async (req: Request, res: Response) => {
        try {
            const { carId, userId, dates } = req.body
            if (!dates || !carId || !userId) throw new Error("Data not specified")
            console.log(userId, carId, dates)
            const termin = new Terminy();
            console.log(dates)
            console.log(new Date(dates[0]))
            termin.DataStart = new Date(dates[0])
            termin.DataZwrotu = new Date(dates[dates.length - 1])
            termin.car = carId
            termin.user = userId
            terminyRepository.save(termin)
            res.status(200).send("Done")
        } catch (error) {
            res.status(400).send(error)
        }

    }


    static userReservations = async (req: Request, res: Response) => {
        try {
            const { userId } = req.body
            const zam = await terminyRepository.find({
                relations: {
                    car: {
                        Cennik: true
                    },

                },
                where: {
                    user: {
                        id: userId
                    },
                    DataZwrotu: MoreThan(new Date())
                }
            })

            res.status(200).send(zam)
        } catch (error) {
            res.status(400).send(error)
        }

    }
    static userHistory = async (req: Request, res: Response) => {
        try {
            const { userId } = req.body
            const zam = await terminyRepository.find({
                relations: {
                    car: {
                        Cennik: true
                    },

                },
                where: {
                    user: {
                        id: userId
                    },
                    DataStart: LessThan(new Date())
                }
            })

            res.status(200).send(zam)
        } catch (error) {
            res.status(400).send(error)
        }

    }

}

