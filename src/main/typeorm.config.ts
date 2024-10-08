import { DataSource } from 'typeorm';
import { join } from 'path';

import { Affair } from './db/entities/Affair';


const databasePath = join(__dirname, '..', 'justiciaAssistant.sqlite');

const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: databasePath,
  entities: [ Affair],
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