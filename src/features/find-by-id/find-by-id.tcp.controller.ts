import { BadRequestException, Controller } from "@nestjs/common";
import { FindByIdService } from "./findById.service";
import { EventPattern } from "@nestjs/microservices";
import { FindByIdDto } from "core/dto/find-by-id.dto";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

@Controller()
export class FindByIdTcpController {
  constructor(private readonly findByIdService: FindByIdService) {}

  @EventPattern({ cmd: "find-product-by-id" })
  async findProductById(data: FindByIdDto) {
    console.log("data: ", data);
    const findDtoInstance = plainToClass(FindByIdDto, data);
    const { id } = findDtoInstance;
    const errors = await validate(findDtoInstance);

    if (errors.length > 0) {
      console.log("validation failed. errors: ", errors);
      throw new BadRequestException(errors);
    }

    const product = await this.findByIdService.findProductById(id);
    console.log("product: ", product);
    return product;
  }
}
