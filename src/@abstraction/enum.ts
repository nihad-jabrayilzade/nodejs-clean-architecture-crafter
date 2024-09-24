enum Layer {
  Core = "core",
  Application = "application",
  Infrastructure = "infrastructure",
}

enum Framework {
  NestJS = "nestjs",
  Express = "express",
}

enum Orm {
  TypeORM = "typeorm",
  Sequelize = "sequelize",
  Prisma = "prisma",
}

export { Layer, Framework, Orm };
