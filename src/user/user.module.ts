import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEnity } from './user.entity';
import { UserController } from './user.controller';


@Module({
  imports: [TypeOrmModule.forFeature([UserEnity])],
  controllers: [UserController],
  providers: []
})

export class UserModule {}
