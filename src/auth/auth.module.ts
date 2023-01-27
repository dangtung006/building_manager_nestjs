import { Module } from '@nestjs/common';
import {AuthController } from './auth.controller';
import {AuthService } from './auth.service';
import {UserService } from '../user/user.service';


@Module({
    controllers: [AuthController],
    providers: [
        {
            provide : 'AUTH_SERVICE',
            useClass : AuthService
        },
        {
            provide : 'USER_SERVICE',
            useClass : UserService
        }
    ]
})
export class AuthModule {}
