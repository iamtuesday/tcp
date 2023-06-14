import { UpdateStockService } from "./update-stock.service";
import { updateStockTcpStock } from "./update-stock.dto";
export declare class UpdateStockTcpModule {
    private readonly updateStockService;
    constructor(updateStockService: UpdateStockService);
    updateStock(data: updateStockTcpStock): Promise<string>;
}
