import { IsEnum, IsInt, IsNotEmpty, IsString, Min, IsObject, IsOptional, ValidateNested, ValidateIf } from "class-validator";
import { Type } from "class-transformer";
import { Environment } from "./type";

export class SwaggerContactConfigValidationSchema {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  email?: string;
}

export class SwaggerAuthConfigValidationSchema {
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  in?: string;

  @IsOptional()
  @IsString()
  name?: string;
}

export class SwaggerConfigValidationSchema {
  @IsOptional()
  @IsString()
  path?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  version?: string;

  @ValidateNested()
  @IsOptional()
  @Type(() => SwaggerContactConfigValidationSchema)
  contact?: SwaggerContactConfigValidationSchema;

  @ValidateNested()
  @IsOptional()
  @Type(() => SwaggerAuthConfigValidationSchema)
  auth?: SwaggerAuthConfigValidationSchema;
}

export class MysqlDatabaseConfigValidationSchema {
  @IsString()
  @IsNotEmpty()
  host: string;

  @IsInt()
  @Min(1)
  port: number;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @Min(0)
  retryAttempts: number;

  @IsInt()
  @Min(0)
  connectTimeout: number;
}

export class DatabaseConfigValidationSchema {
  @ValidateNested()
  @Type(() => MysqlDatabaseConfigValidationSchema)
  mysql: MysqlDatabaseConfigValidationSchema;
}

export class AppConfigValidationSchema {
  @IsInt()
  @Min(1)
  port: number;

  @IsString()
  @IsNotEmpty()
  hostname: string;

  @IsString()
  @IsNotEmpty()
  prefix: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}

export class ConfigValidationSchema {
  @IsEnum(Environment)
  environment: Environment;

  @ValidateNested()
  @Type(() => AppConfigValidationSchema)
  app: AppConfigValidationSchema;

  @ValidateNested()
  @Type(() => DatabaseConfigValidationSchema)
  database: DatabaseConfigValidationSchema;

  @ValidateNested()
  @Type(() => SwaggerConfigValidationSchema)
  swagger: SwaggerConfigValidationSchema;
}
