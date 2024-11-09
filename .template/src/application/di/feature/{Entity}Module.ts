import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrm{Entity}Repository, TypeOrm{Entity} } from "@infrastructure/persistence/typeorm/feature/{entity-folder}";
import { {Entity}Controller } from "@application/api/rest/{entity-folder}/controller/{Entity}Controller";
import { {Entity}DITokens } from "@core/domain/{entity-folder}/di";
import { {Entity}Repository } from "@core/domain/{entity-folder}/repository";
import { Get{Entity}Service, Get{Entity}sService, Create{Entity}Service, Update{Entity}Service, Delete{Entity}Service } from "@core/service/{entity-folder}";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([TypeOrm{Entity}])],
  controllers: [{Entity}Controller],
  providers: [
    {
      provide: {Entity}DITokens.{Entity}Repository,
      useClass: TypeOrm{Entity}Repository,
    },
    {
      provide: {Entity}DITokens.Get{Entity}UseCase,
      useFactory: ({entity}Repository: {Entity}Repository) => new Get{Entity}Service({entity}Repository),
      inject: [{Entity}DITokens.{Entity}Repository],
    },
    {
      provide: {Entity}DITokens.Get{Entity}sUseCase,
      useFactory: ({entity}Repository: {Entity}Repository) => new Get{Entity}sService({entity}Repository),
      inject: [{Entity}DITokens.{Entity}Repository],
    },
    {
      provide: {Entity}DITokens.Create{Entity}UseCase,
      useFactory: ({entity}Repository: {Entity}Repository) => new Create{Entity}Service({entity}Repository),
      inject: [{Entity}DITokens.{Entity}Repository],
    },
    {
      provide: {Entity}DITokens.Update{Entity}UseCase,
      useFactory: ({entity}Repository: {Entity}Repository) => new Update{Entity}Service({entity}Repository),
      inject: [{Entity}DITokens.{Entity}Repository],
    },
    {
      provide: {Entity}DITokens.Delete{Entity}UseCase,
      useFactory: ({entity}Repository: {Entity}Repository) => new Delete{Entity}Service({entity}Repository),
      inject: [{Entity}DITokens.{Entity}Repository],
    },
  ],
  exports: [
    {Entity}DITokens.{Entity}Repository,
    {Entity}DITokens.Get{Entity}UseCase,
    {Entity}DITokens.Get{Entity}sUseCase,
    {Entity}DITokens.Create{Entity}UseCase,
    {Entity}DITokens.Update{Entity}UseCase,
    {Entity}DITokens.Delete{Entity}UseCase,
  ],
})
export class {Entity}Module {}
