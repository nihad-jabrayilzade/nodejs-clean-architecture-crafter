import { {Entity}Repository } from "@core/domain/{entity}/repository/{Entity}Repository";
import { Get{Entities}UseCase, Get{Entities}UseCaseResult, Get{Entities}UseCasePort } from "@core/domain/{entity}/use-case";

export class Get{Entities}Service implements Get{Entities}UseCase {
  constructor(private readonly {entity}Repository: {Entity}Repository) {}

  public async execute(port: Get{Entities}UseCasePort): Get{Entities}UseCaseResult {
    const result = await this.{entity}Repository.get{Entities}(port);

    return result;
  }
}
