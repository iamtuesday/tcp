import { CreateDto } from "features/create/create.dto";
import { Db } from "mongodb";
export declare class CreateService {
    private readonly db;
    constructor(db: Db);
    createProduct(createDto: CreateDto): Promise<any>;
}
