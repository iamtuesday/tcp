import { Injectable, Inject } from "@nestjs/common";
import { Db } from "mongodb";

@Injectable()
export class FindService {
    constructor(@Inject("DATABASE_CONNECTION") private readonly db: Db) {}

    async findProduct(): Promise<string> {
        try {
            const products = await this.db.collection("products").find().toArray();
            return JSON.stringify(products);
        } catch (error) {
            console.log(error);
        }
    }
}