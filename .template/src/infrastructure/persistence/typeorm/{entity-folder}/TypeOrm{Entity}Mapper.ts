import { EntityMapper } from "@core/common/mapper/EntityMapper";
import { {Entity} } from "@core/domain/{Entity}/entity";
import { TypeOrm{Entity} } from "@infrastructure/persistence/typeorm/{entity}";

export class TypeOrm{Entity}Mapper implements EntityMapper<TypeOrm{Entity}, {Entity}> {
  public toDomainEntity({entity}: TypeOrm{Entity}): {Entity} {
    return new {Entity}({
      id: {entity}.id,
      createdAt: {entity}.createdAt,
      updatedAt: {entity}.updatedAt,
      deletedAt: {entity}.deletedAt,
    });
  }

  public toDomainEntities({entity}s: TypeOrm{Entity}[]): {Entity}[] {
    return {entity}s.map(({entity}) => this.toDomainEntity({entity}));
  }

  public toOrmEntity({entity}: {Entity}): TypeOrm{Entity} {
    return {
      id: {entity}.id,
      createdAt: {entity}.createdAt,
      updatedAt: {entity}.updatedAt,
      deletedAt: {entity}.deletedAt,
    };
  }

  public toOrmEntities({entity}s: {Entity}[]): TypeOrm{Entity}[] {
    return {entity}s.map(({entity}) => this.toOrmEntity({entity}));
  }
}
