import { Module } from "@nestjs/common";
import { MongodbModule } from "datasources/mongodb/mongodb.module";
import { FindController } from "./find.controller";
import { FindService } from "./find.service";

@Module({
    imports: [MongodbModule.forRoot("nestdb")],
    controllers: [FindController],
    providers: [FindService],
})
export class FindModule {}