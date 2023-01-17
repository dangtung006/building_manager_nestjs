import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
export enum roleCode {
    ADMIN = 'admin',
    USER  = 'user'
}

@Entity({
    name : 'user'
})
export class UserEnity {
    @PrimaryGeneratedColumn("uuid")
    id : String

    @Column({
        length : 50
    })
    firstName : String

    @Column({
        length : 50
    })
    lastName : String

    @Column({ default: true })
    isActive  : Boolean

    @Column({
        type    : "enum",
        enum    : roleCode,
        default : roleCode.ADMIN
    })
    role : String
}