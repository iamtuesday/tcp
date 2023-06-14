import { Module } from "@nestjs/common";
import { MongodbModule } from "datasources/mongodb/mongodb.module";
import { UpdateStatusHttpController } from "./update-status.http.controller";
import { UpdateStatusService } from "./update-status.service";
import { UpdateStatusTcpController } from "./update-status.tcp.controller";

@Module({
    imports: [MongodbModule.forRoot("nestdb")],
    controllers: [UpdateStatusHttpController, UpdateStatusTcpController],
    providers: [UpdateStatusService],
})
export class UpdateStatusModule {}