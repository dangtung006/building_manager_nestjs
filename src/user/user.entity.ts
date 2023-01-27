import { Column, Entity } from "typeorm";
import { BaseEntity } from "./../common/mysql/base.entity";
export enum roleCode {
    ADMIN = 'admin',
    USER  = 'user'
}

@Entity({
    name : 'user'
})
export class UserEnity extends BaseEntity {
    
    @Column({
        length : 50
    })
    firstName : string

    @Column({
        length : 50
    })
    lastName : string

    @Column({ default: true })
    isActive  : boolean

    @Column({
        type    : "enum",
        enum    : roleCode,
        default : roleCode.ADMIN
    })
    role : String
}