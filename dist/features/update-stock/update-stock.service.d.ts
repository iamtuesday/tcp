import { Db } from "mongodb";
export declare class UpdateStockService {
    private readonly db;
    constructor(db: Db);
    updateStock(id: string, stock: number): Promise<string>;
}
