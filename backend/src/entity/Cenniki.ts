import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm"
import { Car } from "./Car"


@Entity()
export class Cennik {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    Cena: number
   
}