import { Module } from "@nestjs/common";
import { MongodbModule } from "datasources/mongodb/mongodb.module";
import { UpdateStockService } from "./update-stock.service";
import { UpdateStockHttpController } from "./update-stock.http.controller";
import { UpdateStockTcpModule } from "./update-stock.tcp.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [MongodbModule.forRoot("nestdb")],
  controllers: [UpdateStockHttpController, UpdateStockTcpModule],
  providers: [UpdateStockService],
})
export class UpdateStockModule {}
