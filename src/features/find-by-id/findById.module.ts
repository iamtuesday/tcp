import { Module } from "@nestjs/common";
import { FindByIdService } from "./findById.service";
import { MongodbModule } from "datasources/mongodb/mongodb.module";
import { FindByIdHttpController } from "./find-by-id.http.controller";
import { FindByIdTcpController } from "./find-by-id.tcp.controller";

@Module({
  imports: [MongodbModule.forRoot("nestdb")],
  controllers: [FindByIdHttpController, FindByIdTcpController],
  providers: [FindByIdService],
})
export class FindByIdModule {}
