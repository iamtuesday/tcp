import { Module } from "@nestjs/common";
import { MongodbModule } from "./datasources/mongodb/mongodb.module";
import { CreateModule } from "features/create/create.module";
import { FindModule } from "features/find/find.module";
import { FindByIdModule } from "features/find-by-id/findById.module";
import { UpdateStatusModule } from "features/update-status/update-status.module";
import { UpdateStockModule } from "features/update-stock/update-stock.module";

@Module({
  imports: [
    MongodbModule.forRoot("nestdb"),
    CreateModule,
    FindModule,
    FindByIdModule,
    UpdateStatusModule,
    UpdateStockModule,
  ],
})
export class AppModule {}
