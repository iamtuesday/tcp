import { Inject, Injectable } from "@nestjs/common";
import { CreateDto } from "features/create/create.dto";
import { Db } from "mongodb";

@Injectable()
export class CreateService {
  constructor(@Inject("DATABASE_CONNECTION") private readonly db: Db) {}

  async createProduct(createDto: CreateDto): Promise<any> {
    try {
      const result = await this.db.collection("products").insertOne(createDto);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
