import { CreateService } from "./product.service";
interface Product {
    name: string;
    description: string;
    price: number;
    stock: number;
    isActive: boolean;
}
export declare class CreateController {
    private readonly createService;
    constructor(createService: CreateService);
    getProducts(): string;
    createProduct(product: Product): string;
}
export {};
