import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  BadRequestException,
} from "@nestjs/common";
import { CreateService } from "./create.service";
import { CreateDto } from "features/create/create.dto";
import { validate } from "class-validator";

@Controller("api")
export class CreateHttpController {
  constructor(private createService: CreateService) {}

  @Post("products")
  async createProduct(@Body(ValidationPipe) createDto: CreateDto) {
    const errors = await validate(createDto);
    console.log("errors: ", errors);

    if (errors.length > 0) {
      console.log("validation failed. errors: ", errors);
      throw new BadRequestException(errors);
    }

    const result = await this.createService.createProduct(createDto);

    return {
      message: "Product created successfully",
      id: result.insertedId,
    };
  }
}
