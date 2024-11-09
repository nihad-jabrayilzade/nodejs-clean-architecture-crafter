import { Assert } from "@core/common/util/assert";
import { {Entity}Repository } from "@core/domain/{entity-folder}/repository";
import { Get{Entity}UseCasePort, Get{Entity}UseCaseResult, Get{Entity}UseCase } from "@core/domain/{entity-folder}/use-case";
import { {Entity}NotFoundException } from "@core/domain/{entity-folder}/exception";

export class Get{Entity}Service implements Get{Entity}UseCase {
  constructor(private readonly {entity}Repository: {Entity}Repository) {}

  public async execute(port: Get{Entity}UseCasePort): Get{Entity}UseCaseResult {
    const result = await this.{entity}Repository.get{Entity}(port);

    return result;
  }
}
