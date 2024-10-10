export type Config = {
  environment: Environment;
  app: AppConfig;
  database: DatabaseConfig;
  swagger?: SwaggerConfig;
};

export enum Environment {
  Development = "development",
  Production = "production",
  Test = "test",
}

export type AppConfig = {
  port: number;
  hostname: string;
  prefix: string;
  name: string;
  description: string;
  title: string;
};

export type DatabaseConfig = {
  mysql: MysqlDatabaseConfig;
};

export type MysqlDatabaseConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
  name: string;
  retryAttempts: number;
  connectTimeout: number;
};

export type SwaggerConfig = {
  path?: string;
  title?: string;
  description?: string;
  version?: string;
  contact?: SwaggerContactConfig;
  auth?: SwaggerAuthConfig;
};

export type SwaggerContactConfig = {
  name?: string;
  url?: string;
  email?: string;
};

export type SwaggerAuthConfig = {
  type?: string;
  in?: string;
  name?: string;
};
