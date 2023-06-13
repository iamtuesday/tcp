import { UpdateStockService } from "./update-stock.service";
import { UpdateStockDto } from "core/dto/update-stock.dto";
export declare class UpdateStockHttpController {
    private updateStockService;
    constructor(updateStockService: UpdateStockService);
    updateStock(productId: string, uptadeStockDto: UpdateStockDto): Promise<string>;
}
