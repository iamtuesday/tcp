import { Module } from "@nestjs/common";
import { FindByIdController } from "./findById.controller";
import { FindByIdService } from "./findById.service";
import { MongodbModule } from "datasources/mongodb/mongodb.module";

@Module({
  imports: [MongodbModule.forRoot("nestdb")],
  controllers: [FindByIdController],
  providers: [FindByIdService],
})
export class FindByIdModule {}
