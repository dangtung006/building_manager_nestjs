import { Expose, Transform } from 'class-transformer'
export class UserDto {
    @Expose()
    id : string

    firstName : string

    lastName : string

    @Expose()
    @Transform(({obj}) => obj.firstName + ' ' + obj.lastName)
    fullName : string

    @Expose()
    isActive  : boolean
}