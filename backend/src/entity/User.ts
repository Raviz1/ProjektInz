import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    Login: string
    @Column()
    Email: string
    @Column()
    Password: string
    @Column()
    isActive: boolean
    @Column({ nullable: true })
    userHash: string
    @Column()
    Token: string

}
