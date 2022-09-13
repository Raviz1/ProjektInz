import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Car } from "./Car"
@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    Title: string
    @Column()
    Url: string
    @ManyToOne(() => Car, (car) => car.Images)
    car: Car
}