import { Controller, Post, Body, Put, Param, Get, Delete } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')

export class UserController {
    constructor(
        private readonly userService : UserService
    ){}

    @Post("create")
    save(@Body() user : UserDto) : Promise<UserDto> {
        let newUser = this.userService.save(user);
        return newUser;
    }

    @Put('update/:id')
    update(@Param('id') id : string, @Body() user : UserDto):Promise<{result : number}>{
        return this.userService.updateById(id, user);
    }

    @Get(':id')
    getDetail(@Param('id') id : string):Promise<UserDto>{
        let user = this.userService.getById(id);
        console.log("user : " , user);
        return user;
    }

    @Delete(':id')
    delete(@Param('id') id : string):Promise<{result : number}>{
        return this.userService.deleteById(id);
    }
}
