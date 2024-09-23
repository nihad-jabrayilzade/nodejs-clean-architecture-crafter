import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Nullable } from "@core/common/type";
import { Repository } from "typeorm";
import { TypeOrm{Entity} } from "@infrastructure/persistence/typeorm/{entity}/TypeOrm{Entity}";
import { TypeOrm{Entity}Mapper } from "@infrastructure/persistence/typeorm/{entity}/TypeOrm{Entity}Mapper";
import { {Entity}Repository } from "@core/domain/{entity}/repository/{Entity}Repository";
import {
  Get{Entity}RepositoryPort,
  Get{Entity}RepositoryResult,
  Get{Entities}RepositoryPort,
  Create{Entity}RepositoryPort,
  Create{Entity}RepositoryResult,
  Update{Entity}RepositoryPort,
  Update{Entity}RepositoryResult,
  Delete{Entity}RepositoryPort,
  Delete{Entity}RepositoryResult,
} from "@core/domain/{entity}/repository/type";

@Injectable()
export class TypeOrm{Entity}Repository implements {Entity}Repository {
  private readonly {entity}Mapper: TypeOrm{Entity}Mapper = new TypeOrm{Entity}Mapper();

  constructor(
    @InjectRepository(TypeOrm{Entity}) private {entity}Repository: Repository<TypeOrm{Entity}>,
  ) {}

  public async get{Entities}(port: Get{Entities}RepositoryPort): Get{Entity}RepositoryResult {
    const typeOrm{Entities}: TypeOrm{Entity}[] = await this.{entity}Repository
      .createQueryBuilder("{entity}")
      .take(port.limit)
      .skip(port.offset)
      .getMany();

    const [typeOrm{Entities}, totalItems]: [TypeOrm{Entity}[], number] = await query.getManyAndCount();

    const {entities} = this.{entity}Mapper.toDomainEntities(typeOrm{Entities});

    return {
      items: {entities},
      totalItems,
    };
  }

  public async get{Entity}(port: Get{Entity}RepositoryPort): Get{Entity}RepositoryResult {
    try {
      const typeOrm{Entity}: Nullable<TypeOrm{Entity}> = await this.{entity}Repository
        .createQueryBuilder("{entity}")
        .where("{entity}.id = :id", { id: port.id })
        .getOne();

      return typeOrm{Entity} ? this.{entity}Mapper.toDomainEntity(typeOrm{Entity}) : null;
    } catch (exception) {
      throw exception;
    }
  }

  public async create{Entity}(port: Create{Entity}RepositoryPort): Create{Entity}RepositoryResult {
    try {
      const insertResult = await this.{entity}Repository.insert(port);

      return {
        id: insertResult.generatedMaps[0].id,
        createdAt: insertResult.generatedMaps[0].createdAt,
      };
    } catch (exception) {
      throw exception;
    }
  }

  public async update{Entity}(port: Update{Entity}RepositoryPort): Update{Entity}RepositoryResult {
    const typeOrm{Entity} = this.{entity}Mapper.toOrmEntity(port);

    try {
      await this.{entity}Repository.update(port.id, typeOrm{Entity});
    } catch (exception) {
      throw exception;
    }
  }

  public async delete{Entity}(port: Delete{Entity}RepositoryPort): Delete{Entity}RepositoryResult {
    try {
      const typeOrm{Entity} = this.{entity}Mapper.toOrmEntity(port);
      
      await this.{entity}Repository.remove(typeOrm{Entity});
    } catch (exception) {
      throw exception;
    }
  }
}
