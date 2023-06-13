"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongodb_module_1 = require("./datasources/mongodb/mongodb.module");
const create_module_1 = require("./features/create/create.module");
const find_module_1 = require("./features/find/find.module");
const findById_module_1 = require("./features/find-by-id/findById.module");
const update_status_module_1 = require("./features/update-status/update-status.module");
const update_stock_module_1 = require("./features/update-stock/update-stock.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongodb_module_1.MongodbModule.forRoot("nestdb"),
            create_module_1.CreateModule,
            find_module_1.FindModule,
            findById_module_1.FindByIdModule,
            update_status_module_1.UpdateStatusModule,
            update_stock_module_1.UpdateStockModule,
        ],
    })
], AppModule);
