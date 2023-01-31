import { Inject, Injectable } from '@nestjs/common';
import {UserService } from '../user/user.service';
import { comparePassword } from '../common/brypt';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_SERVICE') private readonly userService : UserService
    ){}

    async validateUser(email : string, password : string){
        const user = await this.userService.getByEmail(email);
        if(user){
            if(comparePassword(password , user.password)) {
                return user;
            }
            return null;
        }

        return null;
    }
}
