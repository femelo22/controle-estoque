import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "controle-estoque",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/**/entities/*.{js,ts}"],
    migrations: [__dirname + "/**/migrations/*.{js,ts}"],
    subscribers: [],
})
