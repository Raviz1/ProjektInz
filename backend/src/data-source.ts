import "reflect-metadata"
import { DataSource } from "typeorm"
import { Car } from "./entity/Car"
import { User } from "./entity/User"
import { Image } from "./entity/Image"
import { Terminy } from "./entity/Terminy"



export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user",
    password: "password",
    database: "db",
    synchronize: true,
    logging: false,
    entities: [User, Car, Image, Terminy],
    migrations: [],
    subscribers: [],
})
