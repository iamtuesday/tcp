import { Controller, Get, Param } from "@nestjs/common";
import { FindByIdService } from "./findById.service";
import { FindByIdDto } from "core/dto/find-by-id.dto";

@Controller("api/products")
export class FindByIdController {
  constructor(private readonly findByIdService: FindByIdService) {}

  @Get(":id")
  async findProductById(@Param() params: FindByIdDto): Promise<string> {
    return await this.findByIdService.findProductById(params.id);
  }
}
