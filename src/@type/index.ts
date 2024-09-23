export type ReplacementKey = "entity" | "entities" | "Entity" | "Entities";

export type Replacements = {
  [key in ReplacementKey]: string;
};

export enum Layer {
  Core = "core",
  Application = "application",
  Infrastructure = "infrastructure",
}

export enum Framework {
  NestJS = "nestjs",
  Express = "express",
}

export enum Orm {
  TypeORM = "typeorm",
  Sequelize = "sequelize",
  Prisma = "prisma",
}
