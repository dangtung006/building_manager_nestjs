import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';
import { TypeormStore } from 'connect-typeorm';
import {getRepository , createConnection, getConnection} from 'typeorm';
import { SessionEntity } from './auth/session.entity'


async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    await createConnection({
        type: "mysql",
        database: "building_manager",
        username: "root", // fill this with your username
        password: "password", // and password
        host: "localhost",
        port: 3306,
        synchronize: true,
        logger: "advanced-console",
        entities: [SessionEntity],
        // logging: "all",
        // dropSchema: true,
        // cache: true,
    });

    const sessionRepository = getRepository(SessionEntity);

    app.useGlobalPipes(new ValidationPipe());
    app.use(
        session({
            secret: 'my-secret',
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 60000 },
            store : new TypeormStore().connect(sessionRepository)
        })
    );

    app.use(passport.initialize());
    app.use(passport.session());

    app.useStaticAssets(join(__dirname, '..', 'public'), {
        prefix : '/public/'
    });

    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('ejs');

    await app.listen(3000);
}

bootstrap();
