import { IsNumber, IsString } from "class-validator";

export class updateStockTcpStock {
    @IsString()
    id: string;

    @IsNumber()
    stock: number;
}