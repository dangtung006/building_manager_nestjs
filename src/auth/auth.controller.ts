import { Controller, Post, Body, Put, Param, Get, Delete, UseFilters, Request, UseGuards, Req } from '@nestjs/common';
import { LocalAuthGuard } from './LocalGuard';
import { AuthenticatedGuard } from './LocalGuard';

@Controller('auth')
export class AuthController {
    constructor(
    ){}

    @UseGuards(AuthenticatedGuard)
    @Get('test')
    async getTest(@Request() req){
        return req.user;
    }
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(){}

    @UseGuards(AuthenticatedGuard)
    @Get('status')
    async getAuthStatus(@Request() req){
        return req.user;
    }

    @Get('logout')
    async logout(@Request() req) {

        const logoutError = await new Promise((resolve) =>
            req.logOut({ keepSessionInfo: false }, (error) =>
                resolve(error),
            ),
        );
      
        if (logoutError) {
            console.error(logoutError);
        }
      
        return {
          logout: true,
        };
      }
}
