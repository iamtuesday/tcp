import { CreateService } from "./create.service";
import { CreateDto } from "features/create/create.dto";
export declare class CreateController {
    private createService;
    constructor(createService: CreateService);
    createProduct(createDto: CreateDto): Promise<{
        message: string;
        id: any;
    }>;
}
