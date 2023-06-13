import { Module } from "@nestjs/common";
import { MongodbModule } from "datasources/mongodb/mongodb.module";
import { UpdateStatusController } from "./update-status.controller";
import { UpdateStatusService } from "./update-status.service";

@Module({
    imports: [MongodbModule.forRoot("nestdb")],
    controllers: [UpdateStatusController],
    providers: [UpdateStatusService],
})
export class UpdateStatusModule {}