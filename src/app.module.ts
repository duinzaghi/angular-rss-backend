import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './apis/users/user.module';
import { AuthModule } from './apis/auth/auth.module';
import { AuthMiddleware } from './common/middlewares/auth.middleware';
import { ProductsModule } from './apis/products/products.module';
import { TasksModule } from './apis/tasks/tasks.module';
import { DependenciesModule } from './apis/dependencies/dependencies.module';
import { ResourcesModule } from './apis/resources/resources.module';
import { ResourceAssignmentsModule } from './apis/resource-assignments/resource-assignments.module';
import { EmployeesModule } from './apis/employees/employees.module';
import { RssModule } from './apis/rss/rss.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL, {
      autoCreate: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.MSSQL_HOST || 'localhost',
      port: parseInt(process.env.MSSQL_PORT) || 1433,
      username: process.env.MSSQL_USER_NAME || 'sa',
      password: process.env.MSSQL_PASSWORD || 'reallyStrongPwd123',
      database: process.env.MSSQL_DB || 'master',
      entities: ["dist/**/entities/*.entity.{ts,js}"],
      synchronize: process.env.MODE === 'development' ? true: false,
      extra: {
        trustServerCertificate: true,
      }
    }),
    AuthModule,
    UserModule,
    ProductsModule,
    TasksModule,
    DependenciesModule,
    ResourcesModule,
    ResourceAssignmentsModule,
    EmployeesModule,
    RssModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'api/v1/auth/register', method: RequestMethod.POST },
        { path: 'api/v1/auth/login', method: RequestMethod.POST },
      )
      .forRoutes('');
  }
}
