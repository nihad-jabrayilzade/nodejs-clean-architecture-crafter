import { DatabaseConfig } from "@application/config";
import { TypeOrmDirectory } from "@infrastructure/persistence/typeorm";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const config = configService.get<DatabaseConfig>("database");

        return {
          type: "mysql",
          charset: "utf8",
          host: config.mysql.host,
          port: config.mysql.port,
          username: config.mysql.username,
          password: config.mysql.password,
          database: config.mysql.name,
          retryAttempts: config.mysql.retryAttempts,
          connectTimeout: config.mysql.connectTimeout,
          entities: [`${TypeOrmDirectory}/**/entity/*{.ts}`],
          migrations: [`${TypeOrmDirectory}/migration/*{.ts}`],
        };
      },
    }),
  ],
})
export class DatabaseModule {}
