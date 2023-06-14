import { Inject, Injectable } from "@nestjs/common";
import { Db, ObjectId } from "mongodb";

@Injectable()
export class UpdateStatusService {
  constructor(@Inject("DATABASE_CONNECTION") private readonly db: Db) {}

  async updateStatus(productId: string, status: boolean): Promise<string> {
    try {
      const query = { _id: new ObjectId(productId) };
      const uptade = { $set: { isActive: status } };

      const result = await this.db
        .collection("products")
        .updateOne(query, uptade);

      return JSON.stringify(result);

    } catch (error) {
      console.log(error);
    }
  }
}
