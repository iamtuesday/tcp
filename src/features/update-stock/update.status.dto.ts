import { IsBoolean, IsString } from "class-validator";

export class UpdateStatusDto {
    @IsString()
    id: string;

    @IsBoolean()
    isActive: boolean;
}