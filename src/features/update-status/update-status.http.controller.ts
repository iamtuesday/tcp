import { Body, Controller, Param, Patch } from "@nestjs/common";
import { UpdateStatusService } from "./update-status.service";

@Controller("api/products")
export class UpdateStatusHttpController {
    constructor(private readonly updateStatusService: UpdateStatusService) {}

    @Patch(":id/status")
    async updateStatus(@Param("id") productId: string, @Body("isActive") isActive: boolean) : Promise<string> {

        const result = await this.updateStatusService.updateStatus(productId, isActive);
        return result;
    }  
}