import { Db } from "mongodb";
export declare class FindByIdService {
    private readonly db;
    constructor(db: Db);
    findProductById(productId: string): Promise<string>;
}
