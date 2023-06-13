import { Controller, Get } from "@nestjs/common";
import { FindService } from "./find.service";
import { Product } from "core/interfaces/product.interface";

@Controller("api")
export class FindController {
  constructor(private findService: FindService) {}

  @Get("products")
  findProduct(): any {
    return this.findService.findProduct();
  }
}
