import { IsString, IsNumber, IsBoolean, IsNotEmpty } from "class-validator";
import { Transform } from "class-transformer";

export class CreateDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsNotEmpty()
  @IsBoolean()
  @Transform(({ value }) => value === "true")
  isActive: boolean;
}
