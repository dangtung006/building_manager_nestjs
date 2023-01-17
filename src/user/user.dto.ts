import { Expose, Transform } from 'class-transformer'
export class UserDto {
    @Expose()
    id : String

    firstName : String

    lastName : String

    @Expose()
    @Transform(({obj}) => obj.firstName + ' ' + obj.lastName)
    fullName : String

    @Expose()
    isActive  : Boolean
}