import * as bcrypt from 'bcrypt';

export function encodePassword(rawpass: string){
    const salt  = bcrypt.genSaltSync();
    return bcrypt.hashSync(rawpass, salt);
}

export function comparePassword(rawpass: string, hash: string){
    return bcrypt.compareSync(rawpass, hash);
}