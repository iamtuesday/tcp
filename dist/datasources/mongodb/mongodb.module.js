"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MongodbModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbModule = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
let MongodbModule = exports.MongodbModule = MongodbModule_1 = class MongodbModule {
    static forRoot(databaseName) {
        return {
            module: MongodbModule_1,
            providers: [
                {
                    provide: 'DATABASE_CONNECTION',
                    useFactory: async () => {
                        const uri = `mongodb://localhost:27017/${databaseName}`;
                        const client = new mongodb_1.MongoClient(uri);
                        await client.connect();
                        console.log('Connecting to MongoDB...');
                        const db = client.db();
                        return db;
                    }
                }
            ],
            exports: ['DATABASE_CONNECTION']
        };
    }
};
exports.MongodbModule = MongodbModule = MongodbModule_1 = __decorate([
    (0, common_1.Module)({})
], MongodbModule);
