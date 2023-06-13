"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStockModule = void 0;
const common_1 = require("@nestjs/common");
const mongodb_module_1 = require("../../datasources/mongodb/mongodb.module");
const update_stock_service_1 = require("./update-stock.service");
const update_stock_http_controller_1 = require("./update-stock.http.controller");
const update_stock_tcp_controller_1 = require("./update-stock.tcp.controller");
let UpdateStockModule = exports.UpdateStockModule = class UpdateStockModule {
};
exports.UpdateStockModule = UpdateStockModule = __decorate([
    (0, common_1.Module)({
        imports: [mongodb_module_1.MongodbModule.forRoot("nestdb")],
        controllers: [update_stock_http_controller_1.UpdateStockHttpController, update_stock_tcp_controller_1.UpdateStockTcpModule],
        providers: [update_stock_service_1.UpdateStockService],
    })
], UpdateStockModule);
