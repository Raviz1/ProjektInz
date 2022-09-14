import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Car } from "./Car"
@Entity()
export class Terminy {
    @PrimaryGeneratedColumn()
    id: number
    @Column('date')
    DataStart: Date
    @Column('date')
    DataZwrotu: Date
    @ManyToOne(() => Car, (car) => car.Lents)
    car: Car

}