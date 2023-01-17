import { Repository } from "typeorm";
import { BaseEntity } from "./base.entity";
export class BaseService<Entity extends BaseEntity> {
    constructor(protected repo: Repository<Entity>){}
    
}