import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Image } from "./Image"

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    Model: string
    @Column('date')
    MakeYear: Date
    @Column()
    Colour: string
    @Column()
    FuelType: string
    @OneToMany(() => Image, (image) => image.car)
    Images: Image[]
}