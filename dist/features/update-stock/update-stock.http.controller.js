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
exports.UpdateStockHttpController = void 0;
const common_1 = require("@nestjs/common");
const update_stock_service_1 = require("./update-stock.service");
const update_stock_dto_1 = require("../../core/dto/update-stock.dto");
let UpdateStockHttpController = exports.UpdateStockHttpController = class UpdateStockHttpController {
    constructor(updateStockService) {
        this.updateStockService = updateStockService;
    }
    async updateStock(productId, uptadeStockDto) {
        return await this.updateStockService.updateStock(productId, uptadeStockDto.stock);
    }
};
__decorate([
    (0, common_1.Patch)(":id/stock"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_stock_dto_1.UpdateStockDto]),
    __metadata("design:returntype", Promise)
], UpdateStockHttpController.prototype, "updateStock", null);
exports.UpdateStockHttpController = UpdateStockHttpController = __decorate([
    (0, common_1.Controller)("api/products"),
    __metadata("design:paramtypes", [update_stock_service_1.UpdateStockService])
], UpdateStockHttpController);
