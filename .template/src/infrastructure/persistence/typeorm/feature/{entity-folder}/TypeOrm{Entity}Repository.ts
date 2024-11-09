import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, EntityNotFoundError } from "typeorm";
import { Nullable } from "@core/common/type";
import { {Entity}NotFoundException } from "@core/domain/{entity-folder}/exception";
import { {Entity}Repository } from "@core/domain/{entity-folder}/repository/{Entity}Repository";
import {
  Get{Entity}RepositoryPort,
  Get{Entity}RepositoryResult,
  Get{Entity}sRepositoryPort,
  Get{Entity}sRepositoryResult,
  Create{Entity}RepositoryPort,
  Create{Entity}RepositoryResult,
  Update{Entity}RepositoryPort,
  Update{Entity}RepositoryResult,
  Delete{Entity}RepositoryPort,
  Delete{Entity}RepositoryResult,
  Is{Entity}ExistsRepositoryPort,
  Is{Entity}ExistsRepositoryResult,
} from "@core/domain/{entity-folder}/repository";
import { TypeOrm{Entity}, TypeOrm{Entity}Mapper } from "@infrastructure/persistence/typeorm/feature/{entity-folder}";

@Injectable()
export class TypeOrm{Entity}Repository implements {Entity}Repository {
  private readonly {entity}Mapper: TypeOrm{Entity}Mapper = new TypeOrm{Entity}Mapper();

  constructor(
    @InjectRepository(TypeOrm{Entity}) private {entity}Repository: Repository<TypeOrm{Entity}>,
  ) {}

  public async get{Entity}s(port: Get{Entity}sRepositoryPort): Get{Entity}sRepositoryResult {
    try {
      const [typeOrm{Entity}s, totalItems]: [TypeOrm{Entity}[], number] = await this.{entity}Repository
      .createQueryBuilder("{entity}")
      .take(port.limit)
      .skip(port.offset)
      .getManyAndCount();

      const {entity}s = this.{entity}Mapper.toDomainEntities(typeOrm{Entity}s);

      return {
        items: {entity}s,
        totalItems,
      };
    } catch (error) {
      throw error;
    }
  }

  public async get{Entity}(port: Get{Entity}RepositoryPort): Get{Entity}RepositoryResult {
    try {
      const typeOrm{Entity}: Nullable<TypeOrm{Entity}> = await this.{entity}Repository
        .createQueryBuilder("{entity}")
        .where("{entity}.id = :id", { id: port.id })
        .getOneOrFail();

      return typeOrm{Entity} ? this.{entity}Mapper.toDomainEntity(typeOrm{Entity}) : null;
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        throw new {Entity}NotFoundException(port.id);
      }

      throw error;
    }
  }

  public async create{Entity}(port: Create{Entity}RepositoryPort): Create{Entity}RepositoryResult {
    try {
      const insertResult = await this.{entity}Repository.insert(port);

      return {
        id: insertResult.generatedMaps[0].id,
        createdAt: insertResult.generatedMaps[0].createdAt,
      };
    } catch (error) {
      throw error;
    }
  }

  public async update{Entity}(port: Update{Entity}RepositoryPort): Update{Entity}RepositoryResult {
    const typeOrm{Entity} = this.{entity}Mapper.toOrmEntity(port);

    try {
      await this.{entity}Repository.update(port.id, typeOrm{Entity});
    } catch (error) {
      throw error;
    }
  }

  public async delete{Entity}(port: Delete{Entity}RepositoryPort): Delete{Entity}RepositoryResult {
    try {
      const typeOrm{Entity} = this.{entity}Mapper.toOrmEntity(port);
      
      await this.{entity}Repository.remove(typeOrm{Entity});
    } catch (error) {
      throw error;
    }
  }

  public async exists(port: Is{Entity}ExistsRepositoryPort): Is{Entity}ExistsRepositoryResult {
    try {
      const exists: boolean = await this.{entity}Repository.existsBy(port);

      return exists;
    } catch (error) {
      throw error;
    }
  }
}
