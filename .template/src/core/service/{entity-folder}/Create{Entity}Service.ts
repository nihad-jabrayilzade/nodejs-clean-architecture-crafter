import { Assert } from "@core/common/util/assert";
import { NotNullable } from "@core/common/type";
import { {Entity}Repository } from "@core/domain/{entity}/repository";
import { Create{Entity}UseCase, Create{Entity}UseCaseResult, Create{Entity}UseCasePort } from "@core/domain/{entity}/use-case";
import { {Entity}AlreadyExistsException } from "@core/domain/{entity}/exception";

export class Create{Entity}Service implements Create{Entity}UseCase {
  constructor(private readonly {entity}Repository: {Entity}Repository) {}

  public async execute(port: Create{Entity}UseCasePort): Create{Entity}UseCaseResult {
    const exists = await this.{entity}Repository.exists({ id: port.id });
    Assert.isFalse(exists, new {Entity}AlreadyExistsException(port.id));

    const result = await this.{entity}Repository.create{Entity}(port);

    const {entity} = await this.{entity}Repository.get{Entity}({
      id: result.id,
    });

    return {entity} as NotNullable<typeof {entity}>;
  }
}
