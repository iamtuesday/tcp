import { DynamicModule } from '@nestjs/common';
export declare class MongodbModule {
    static forRoot(databaseName: string): DynamicModule;
}
