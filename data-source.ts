import { DataSource } from "typeorm";
const AppDataSource = new DataSource({
    type: 'mssql',
    host: process.env.MSSQL_HOST || 'localhost',
    port: parseInt(process.env.MSSQL_PORT) || 1433,
    username: process.env.MSSQL_USER_NAME || 'sa',
    password: process.env.MSSQL_PASSWORD || 'reallyStrongPwd123',
    database: process.env.MSSQL_DB || 'angular_rss',
    synchronize: process.env.MODE === 'development' ? true: false,
    extra: {
        trustServerCertificate: true,
    },
    entities: ["dist/**/entities/*.entity.{ts,js}"],
    migrations: ["dist/src/migration/*.js"],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });
export default AppDataSource;