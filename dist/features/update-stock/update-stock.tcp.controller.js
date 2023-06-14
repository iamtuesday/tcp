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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStockTcpModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const update_stock_service_1 = require("./update-stock.service");
const update_stock_dto_1 = require("./update-stock.dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let UpdateStockTcpModule = exports.UpdateStockTcpModule = class UpdateStockTcpModule {
    constructor(updateStockService) {
        this.updateStockService = updateStockService;
    }
    async updateStock(data) {
        const updateStockDtoInstance = (0, class_transformer_1.plainToClass)(update_stock_dto_1.updateStockTcpStock, data);
        const { id: productId, stock } = updateStockDtoInstance;
        const errors = (0, class_validator_1.validate)(updateStockDtoInstance);
        if ((await errors).length > 0) {
            throw new common_1.BadRequestException(errors);
        }
        return await this.updateStockService.updateStock(productId, stock);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)("update-stock"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_stock_dto_1.updateStockTcpStock]),
    __metadata("design:returntype", Promise)
], UpdateStockTcpModule.prototype, "updateStock", null);
exports.UpdateStockTcpModule = UpdateStockTcpModule = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [update_stock_service_1.UpdateStockService])
], UpdateStockTcpModule);
