import { Db } from "mongodb";
export declare class FindService {
    private readonly db;
    constructor(db: Db);
    findProduct(): Promise<string>;
}
