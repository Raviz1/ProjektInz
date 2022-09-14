"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Car_1 = require("./entity/Car");
const User_1 = require("./entity/User");
const Image_1 = require("./entity/Image");
const Terminy_1 = require("./entity/Terminy");
const Cenniki_1 = require("./entity/Cenniki");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user",
    password: "password",
    database: "db",
    synchronize: true,
    logging: false,
    entities: [User_1.User, Car_1.Car, Image_1.Image, Terminy_1.Terminy, Cenniki_1.Cennik],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map