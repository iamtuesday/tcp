import { BadRequestException, Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { UpdateStockService } from "./update-stock.service";
import { updateStockTcpStock } from "./update-stock.dto";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

@Controller()
export class UpdateStockTcpModule {
    constructor(private readonly updateStockService:UpdateStockService) {}

    @MessagePattern("update-stock")
    async updateStock(data:updateStockTcpStock): Promise<string> {
        const updateStockDtoInstance = plainToClass(updateStockTcpStock, data);
        const { id: productId, stock } = updateStockDtoInstance;

        const errors = validate(updateStockDtoInstance);

        if((await errors).length > 0) {
            throw new BadRequestException(errors)
        }

        return await this.updateStockService.updateStock(productId, stock);

    }
}