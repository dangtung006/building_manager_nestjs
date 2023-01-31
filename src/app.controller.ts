import { Controller, Get, Res, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { SkipThrottle, Throttle } from '@nestjs/throttler';

// @SkipThrottle(false)
@Throttle(3, 10)
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('hello')
    getHello(@Res() res: Response) {
        return res.render('index', { message: 'Hello world!' });
    }
}
