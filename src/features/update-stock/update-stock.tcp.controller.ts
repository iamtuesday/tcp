import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Controller("api/products")
export class UpdateStockTcpModule {
    @MessagePattern("update-stock")
    async updateStock({productId, stock}): Promise<string> {
        console.log(productId, stock);
        return `Stock: ${stock}!`
    }
}