import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { UserService } from "src/user/user.service";
import { UserEnity } from "src/user/user.entity";

export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('USER_SERVICE') private readonly userService : UserService
    ){
        super();
    }

    serializeUser(user: UserEnity, done: (err, user: UserEnity)=> void) {
        console.log("aaaaaaaaaaaaaaa");
        console.log(user);
        done(null, user)
    }

    async deserializeUser(user: UserEnity, done:  (err : any, user: UserEnity)=> void) {
        const userDB = await this.userService.getById(user.id);
        console.log("userDB : " , userDB);
        if(userDB) return done(null, user);
        done(null, null);
    }

}