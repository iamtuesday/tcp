"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindModule = void 0;
const common_1 = require("@nestjs/common");
const mongodb_module_1 = require("../../datasources/mongodb/mongodb.module");
const find_controller_1 = require("./find.controller");
const find_service_1 = require("./find.service");
let FindModule = exports.FindModule = class FindModule {
};
exports.FindModule = FindModule = __decorate([
    (0, common_1.Module)({
        imports: [mongodb_module_1.MongodbModule.forRoot("nestdb")],
        controllers: [find_controller_1.FindController],
        providers: [find_service_1.FindService],
    })
], FindModule);
