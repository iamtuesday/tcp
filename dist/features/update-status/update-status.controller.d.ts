import { UpdateStatusService } from "./update-status.service";
export declare class UpdateStatusController {
    private readonly updateStatusService;
    constructor(updateStatusService: UpdateStatusService);
    updateStatus(productId: string, isActive: boolean): Promise<string>;
}
