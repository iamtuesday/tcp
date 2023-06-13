import { Inject, Injectable } from "@nestjs/common";
import { Db, ObjectId } from "mongodb";

@Injectable()
export class FindByIdService {
  constructor(@Inject("DATABASE_CONNECTION") private readonly db: Db) {}

  async findProductById(productId: string): Promise<string> {
    try {
      let query = { _id: new ObjectId(productId) };

      const product = await this.db.collection("products").findOne(query);

      return JSON.stringify(product);
      
    } catch (error) {
      console.log(error);
    }
  }
}
