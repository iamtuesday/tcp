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
const create_service_1 = require("./create.service");
const create_dto_1 = require("./create.dto");
const class_validator_1 = require("class-validator");
let CreateController = exports.CreateController = class CreateController {
    constructor(createService) {
        this.createService = createService;
    }
    async createProduct(createDto) {
        const errors = await (0, class_validator_1.validate)(createDto);
        console.log("errors: ", errors);
        if (errors.length > 0) {
            console.log("validation failed. errors: ", errors);
            throw new common_1.BadRequestException(errors);
        }
        const result = await this.createService.createProduct(createDto);
        return {
            message: "Product created successfully",
            id: result.insertedId,
        };
    }
};
__decorate([
    (0, common_1.Post)("products"),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateDto]),
    __metadata("design:returntype", Promise)
], CreateController.prototype, "createProduct", null);
exports.CreateController = CreateController = __decorate([
    (0, common_1.Controller)("api"),
    __metadata("design:paramtypes", [create_service_1.CreateService])
], CreateController);
