import { Assert } from "@core/common/util/assert";
import { {Entity}Repository } from "@core/domain/{entity-folder}/repository";
import { Update{Entity}UseCase, Update{Entity}UseCaseResult, Update{Entity}UseCasePort } from "@core/domain/{entity-folder}/use-case";
import { {Entity}NotFoundException } from "@core/domain/{entity-folder}/exception";

export class Update{Entity}Service implements Update{Entity}UseCase {
  constructor(private readonly {entity}Repository: {Entity}Repository) {}

  public async execute(port: Update{Entity}UseCasePort): Update{Entity}UseCaseResult {
    const {entity} = await this.{entity}Repository.get{Entity}({ id: port.id });

    Assert.notNull({entity}, new {Entity}NotFoundException(port.id));

    {entity}.update(port);
    await this.{entity}Repository.update{Entity}({entity});

    return {entity};
  }
}
