import { Controller, Post, Body, Put, Param, Get, Delete, UseFilters, Request, UseGuards } from '@nestjs/common';
import { AuthGuard} from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(
    ){}
    
    @UseGuards(AuthGuard)
    @Post('login')
    async login(@Request() req){}
}
