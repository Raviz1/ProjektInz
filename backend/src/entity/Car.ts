import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm"
import { Cennik } from "./Cenniki"
import { Image } from "./Image"
import { Terminy } from "./Terminy"

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
    @OneToMany(() => Terminy, (terminy) => terminy.car)
    Lents: Terminy[]
    @OneToOne(() => Cennik)
    @JoinColumn()
    Cennik: Cennik
}