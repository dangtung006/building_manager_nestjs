import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class UserMiddlewares implements NestMiddleware {
    use(req : Request, res : Response, next : NextFunction){
        let token  = req.headers['x-access-token'];

        if(!token) 
            return res.status(403).send({ error : 'No Authentication Token Provided'});
            
        if(token != "'123'")
            return res.status(403).send({ error : 'Invalid Authentication Token Provided'}); 

        next();
    }
}