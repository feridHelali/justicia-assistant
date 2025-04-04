import { DataSource } from 'typeorm';
import { join } from 'path';
import { Affair } from './db/entities/Affair';
import { Procedure } from './db/entities/Procedure';
import { Schedule } from './db/entities/Schedule';
import { Article} from './db/entities/Article';

const databasePath = join(__dirname, '..', 'justiciaDb.sqlite');

const AppDataSource = new DataSource({
    type: 'better-sqlite3',
    database: databasePath,
    entities: [ Affair,Procedure,Schedule,Article],
    synchronize: true,
    logging: true,
    logger: 'advanced-console',
    migrations: [
        "src/main/db/migrations/**/*.ts"
    ],
    subscribers: [
        "src/main/db/subscribers/**/*.ts"
    ]
});

export default AppDataSource;