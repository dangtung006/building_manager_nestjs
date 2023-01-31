import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { SessionEntity } from './auth/session.entity';
import { UserEnity } from './user/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'building_manager',
        entities: [],
        synchronize: true,
        autoLoadEntities: true
    }),

    AuthModule,
    UserModule,
    
    PassportModule.register({
      session : true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
