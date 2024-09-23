import { Assert } from "@core/common/util/assert";
import { {Entity}Repository } from "@core/domain/{Entity}/repository/{Entity}Repository";
import { Get{Entity}UseCasePort, Get{Entity}UseCaseResult, Get{Entity}UseCase } from "@core/domain/{entity}/use-case";
import { {Entity}NotFoundException } from "@core/domain/{entity}/exception";

export class Get{Entity}Service implements Get{Entity}UseCase {
  constructor(private readonly {entity}Repository: {Entity}Repository) {}

  public async execute(port: Get{Entity}UseCasePort): Get{Entity}UseCaseResult {
    const result = await this.{entity}Repository.get{Entity}(port);

    Assert.notNull(result, new {Entity}NotFoundException(port.id));

    return result;
  }
}
