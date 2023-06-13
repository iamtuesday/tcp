import { FindByIdService } from "./findById.service";
import { FindByIdDto } from "core/dto/find-by-id.dto";
export declare class FindByIdController {
    private readonly findByIdService;
    constructor(findByIdService: FindByIdService);
    findProductById(params: FindByIdDto): Promise<string>;
}
