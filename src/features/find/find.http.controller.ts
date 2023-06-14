import { Controller, Get } from "@nestjs/common";
import { FindService } from "./find.service";

@Controller("api")
export class FindHttpController {
  constructor(private findService: FindService) {}

  @Get("products")
  async findProduct(): Promise<string> {
    return await this.findService.findProduct();
  }
}
