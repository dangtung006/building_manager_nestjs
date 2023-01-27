import { Inject, Injectable } from '@nestjs/common';
import {UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_SERVICE') private readonly userService : UserService
    ){}

    async validateUser(username : string, password : string){
        const user = await this.userService.getByEmail(username);
        if(user && user.password == password){
            return user;
        }
        return null;
    }
}
