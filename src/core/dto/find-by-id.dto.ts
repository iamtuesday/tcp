import { IsString, IsNotEmpty } from "class-validator";

export class FindByIdDto {
    @IsNotEmpty()
    @IsString()
    id: string;
}
