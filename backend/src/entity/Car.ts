import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

}