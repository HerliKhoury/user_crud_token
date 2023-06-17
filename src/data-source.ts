import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    migrationsTableName: 'migrations',
    type: "postgres",
    host: process.env.HOST,
    port: 5432,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: 'weapon_store',
    logging: false,
    synchronize: false,
    name: 'default',
    entities: ['src/**/**.entity{.ts,.js}'],
    migrations: ['src/migrations/**/*{.ts,.js}'],
    subscribers: ['src/subscriber/**/*{.ts,.js}'],
  });