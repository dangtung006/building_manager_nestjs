import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEnity } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserMiddlewares } from '../middlewares/user.middlewares';


@Module({
  imports: [TypeOrmModule.forFeature([UserEnity])],
  controllers: [UserController],
  providers: [UserService]
})

export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(UserMiddlewares)
            .forRoutes(UserController)
    }
}
