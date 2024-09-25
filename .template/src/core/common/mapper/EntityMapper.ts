export interface EntityMapper<OrmEntity, DomainEntity> {
  toDomainEntity?(ormEntity: OrmEntity): DomainEntity;
  toDomain{Entity}s?(orm{Entity}s: OrmEntity[]): DomainEntity[];

  toOrmEntity?(domainEntity: DomainEntity): OrmEntity;
  toOrm{Entity}s?(domain{Entity}s: DomainEntity[]): OrmEntity[];
}
