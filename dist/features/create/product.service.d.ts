import { Db } from "mongodb";
interface Product {
    name: string;
    description: string;
    price: number;
    stock: number;
    isActive: boolean;
}
export declare class CreateService {
    private readonly db;
    constructor(db: Db);
    createProduct(product: Product): Promise<string>;
}
export {};
