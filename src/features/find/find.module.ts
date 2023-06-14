import { Module } from "@nestjs/common";
import { MongodbModule } from "datasources/mongodb/mongodb.module";
import { FindHttpController } from "./find.http.controller";
import { FindService } from "./find.service";
import { FindTcpController } from "./find.tcp.controller";

@Module({
    imports: [MongodbModule.forRoot("nestdb")],
    controllers: [FindHttpController, FindTcpController],
    providers: [FindService],
})
export class FindModule {}