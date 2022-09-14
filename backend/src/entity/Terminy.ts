import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import { Car } from "./Car"
import { User } from "./User"
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
    @ManyToOne(() => User, (user) => user.id)
    user: User

}