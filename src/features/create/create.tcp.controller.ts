import { BadRequestException, Controller } from "@nestjs/common";
import { CreateService } from "./create.service";
import { CreateDto } from "./create.dto";
import { MessagePattern } from "@nestjs/microservices";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

@Controller()
export class CreateTcpController {
  constructor(private readonly createService: CreateService) {}

  @MessagePattern({ cmd: "create-product" })
  async createProduct(data: CreateDto) {
    console.log(data)
    const createDtoInstance = plainToClass(CreateDto, data);
    const errors = await validate(createDtoInstance);

    if (errors.length > 0) {
      console.log("validation failed. errors: ", errors);
      throw new BadRequestException(errors);
    }

    return this.createService.createProduct(createDtoInstance);
  }
}
