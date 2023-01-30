import { Controller, Post, Body, Put, Param, Get, Delete, UseFilters, Request, UseGuards, Req } from '@nestjs/common';
import { AuthGuard} from '@nestjs/passport';
import { LocalAuthGuard } from './LocalGuard';

@Controller('auth')
export class AuthController {
    constructor(
    ){}
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(){}

    @UseGuards(LocalAuthGuard)
    @Get('status')
    async getAuthStatus(@Request() req){
        return req.user;
    }
}
