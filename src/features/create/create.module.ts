import { Module } from "@nestjs/common";
import { MongodbModule } from "datasources/mongodb/mongodb.module";
import { CreateService } from "./create.service";
import { CreateController } from "./create.controller";

@Module({
    imports: [MongodbModule.forRoot('nestdb')],
    controllers: [CreateController],
    providers: [CreateService],
})
export class CreateModule {}