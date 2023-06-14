import { Controller } from "@nestjs/common";
import { FindService } from "./find.service";
import { EventPattern } from "@nestjs/microservices";

@Controller()
export class FindTcpController {
  constructor(private findService: FindService) {}

  @EventPattern({cmd: "find-products"})
  async findProduct(){
    return await  this.findService.findProduct();
  }
}

