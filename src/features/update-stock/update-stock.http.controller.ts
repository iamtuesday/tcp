import { Controller, Param, Patch, Body, ValidationPipe } from "@nestjs/common";
import { UpdateStockService } from "./update-stock.service";
import { UpdateStockDto } from "core/dto/update-stock.dto";

@Controller("api/products")
export class UpdateStockHttpController {
  constructor(private updateStockService: UpdateStockService) {}

  @Patch(":id/stock")
  async updateStock(@Param("id") productId: string, @Body(ValidationPipe) uptadeStockDto: UpdateStockDto) {
    return await this.updateStockService.updateStock(productId, uptadeStockDto.stock);
  }
}