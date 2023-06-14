import { Controller } from "@nestjs/common";
import { UpdateStatusService } from "./update-status.service";
import { MessagePattern } from "@nestjs/microservices";
import { UpdateStatusDto } from "features/update-stock/update.status.dto";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

@Controller()
export class UpdateStatusTcpController {
  constructor(private readonly updateStatusService: UpdateStatusService) {}

  @MessagePattern({ cmd: "update-product-status" })
  async updateStatus(data: UpdateStatusDto): Promise<string> {
    const updateStatusDtoInatance = plainToClass(UpdateStatusDto, data);
    const { id, isActive } = updateStatusDtoInatance;

    const errors = await validate(updateStatusDtoInatance);

    if (errors.length > 0) {
      throw new Error("Validation failed!");
    }

    return await this.updateStatusService.updateStatus(id, isActive);
  }
}
