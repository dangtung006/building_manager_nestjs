import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEnity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { plainToInstance } from 'class-transformer';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEnity) private readonly userRepository : Repository<UserEnity>
    ){}

    async save(userDto : UserDto):Promise<UserDto> {
        const newUser =  await this.userRepository.save(userDto);
        return plainToInstance(UserDto, newUser, {excludeExtraneousValues : true});
    }

    async updateById(id: string, userDto : UserDto):Promise<{ result : number}> {
        const r = await this.userRepository.update(id , userDto);
        if(r.affected == 1) 
            return { result : 1};
        return { result : 0};
    }

    async getById(id: string): Promise<UserDto>{
        // const user = await this.userRepository.findOneById(id);
        const user = await this.userRepository.findOne({
            where : {
                id : id as any
            }
        });
        console.log('user : ', user);
        return plainToInstance(UserDto, user, {excludeExtraneousValues : true});
    }

    async deleteById(id: string):Promise<{ result : number}>{
        await this.userRepository.delete(id);
        return { result : 1};
    }
}
