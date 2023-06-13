import {Module, DynamicModule} from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';

@Module({})
export class MongodbModule {
    static forRoot(databaseName: string): DynamicModule {
        return {
            module: MongodbModule,
            providers: [
                {
                    provide: 'DATABASE_CONNECTION',
                    useFactory: async (): Promise<Db> => {
                        const uri = `mongodb://localhost:27017/${databaseName}`;
                        const client = new MongoClient(uri);
                        await client.connect()

                        console.log('Connecting to MongoDB...');

                        const db = client.db();
                        return db;

                    }
                }
            ],
            exports: ['DATABASE_CONNECTION']
        }

    }
}