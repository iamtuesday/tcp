import { Module } from "@nestjs/common";
import { MongodbModule } from "datasources/mongodb/mongodb.module";
import { CreateService } from "./create.service";
import { CreateHttpController } from "./create.http.controller";
import { CreateTcpController } from "./create.tcp.controller";

@Module({
    imports: [MongodbModule.forRoot('nestdb')],
    controllers: [CreateHttpController, CreateTcpController],
    providers: [CreateService],
})
export class CreateModule {}