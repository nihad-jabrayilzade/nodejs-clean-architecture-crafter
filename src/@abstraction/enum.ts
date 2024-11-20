enum Layer {
  Core = "core",
  CoreCommon = "core/common",
  CoreDomain = "core/domain",
  CoreService = "core/service",
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

enum PackageManager {
  Yarn = "yarn",
  NPM = "npm",
  PNPM = "pnpm",
}

export { Layer, Framework, PackageManager, Orm };
