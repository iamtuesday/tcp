"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
let CreateController = exports.CreateController = class CreateController {
    constructor(createService) {
        this.createService = createService;
    }
    getProducts() {
        return "All Products";
    }
    createProduct(product) {
        this.createService.createProduct(product);
        return "Product created successfully";
    }
};
__decorate([
    (0, common_1.Get)("products"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], CreateController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Post)("products"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CreateController.prototype, "createProduct", null);
exports.CreateController = CreateController = __decorate([
    (0, common_1.Controller)("api"),
    __metadata("design:paramtypes", [product_service_1.CreateService])
], CreateController);
