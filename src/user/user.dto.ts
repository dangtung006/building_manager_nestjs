import { Expose, Transform } from 'class-transformer';
import { MinLength, IsNotEmpty } from 'class-validator';

export class UserDto {
    @Expose()
    id : string

    @IsNotEmpty()
    firstName : string

    @IsNotEmpty()
    lastName : string

    @IsNotEmpty()
    email : string

    @IsNotEmpty()
    password : string

    @Expose()
    @Transform(({obj}) => obj.firstName + ' ' + obj.lastName)
    fullName : string

    @Expose()
    isActive  : boolean
}