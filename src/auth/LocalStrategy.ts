import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth/auth.service';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService : AuthService
    ){
        super({
            usernameField : 'email'
        });
    }

    async validate(email : string, password: string){
        const user = await this.authService.validateUser(email, password);
        if(!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}