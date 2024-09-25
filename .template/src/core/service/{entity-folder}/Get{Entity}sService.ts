import { {Entity}Repository } from "@core/domain/{entity-folder}/repository";
import { Get{Entity}sUseCase, Get{Entity}sUseCaseResult, Get{Entity}sUseCasePort } from "@core/domain/{entity-folder}/use-case";

export class Get{Entity}sService implements Get{Entity}sUseCase {
  constructor(private readonly {entity}Repository: {Entity}Repository) {}

  public async execute(port: Get{Entity}sUseCasePort): Get{Entity}sUseCaseResult {
    const result = await this.{entity}Repository.get{Entity}s(port);

    return result;
  }
}
