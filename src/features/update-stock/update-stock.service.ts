import { Inject, Injectable } from "@nestjs/common";
import { Db, ObjectId } from "mongodb";

@Injectable()
export class UpdateStockService {
  constructor(@Inject("DATABASE_CONNECTION") private readonly db: Db) {}

  async updateStock(id: string, stock: number): Promise<string> {
    try {
      const query = { _id: new ObjectId(id) };
      const update = { $set: { stock: stock } };

      const result = await this.db
        .collection("products")
        .updateOne(query, update);

      return JSON.stringify(result);
    } catch (err) {
      console.log(err);
    }
  }
}
