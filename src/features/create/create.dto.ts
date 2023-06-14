import { IsString, IsNumber, IsBoolean, IsNotEmpty } from "class-validator";
import { Transform } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  @Transform(({ value }) => value === "true")
  isActive: boolean;
}
