import { Module } from '@nestjs/common';
import {AuthController } from './auth.controller';
import {AuthService } from './auth.service';
import {UserService } from '../user/user.service';
import { UserEnity } from '../user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalStrategy } from './LocalStrategy';
import { PassportModule } from '@nestjs/passport';




@Module({
    imports: [
        TypeOrmModule.forFeature([UserEnity]),
        PassportModule
    ],
    
    controllers: [AuthController],
    providers: [
        {
            provide : 'AUTH_SERVICE',
            useClass : AuthService
        },
        {
            provide : 'USER_SERVICE',
            useClass : UserService
        },
        LocalStrategy
    ]
})
export class AuthModule {}
