import { EntityMapper } from "@core/common/mapper/EntityMapper";
import { TypeOrmUser } from "@infrastructure/persistence/typeorm/message-attachment/TypeOrmUser";
import { User } from "@core/domain/message-attachment/entity";

export class TypeOrmUserMapper implements EntityMapper<User, TypeOrmUser> {
  public toDomainEntity(ormEntity: TypeOrmUser): User {
    return new User({
      id: ormEntity.id,
      createdAt: ormEntity.createdAt,
      updatedAt: ormEntity.updatedAt,
      deletedAt: ormEntity.deletedAt,
    });
  }

  public toDomainEntities(ormEntities: TypeOrmUser[]): User[] {
    return ormEntities.map((ormEntity) => this.toDomainEntity(ormEntity));
  }

  public toOrmEntity(domainEntity: User): TypeOrmUser {
    return new TypeOrmUser({
      id: domainEntity.id,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
      deletedAt: domainEntity.deletedAt,
    })
  }
}
