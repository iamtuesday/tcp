import { Db } from "mongodb";
export declare class UpdateStatusService {
    private readonly db;
    constructor(db: Db);
    updateStatus(productId: string, status: boolean): Promise<string>;
}
