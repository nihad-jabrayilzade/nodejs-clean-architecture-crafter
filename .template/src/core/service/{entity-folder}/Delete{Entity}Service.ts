import { Assert } from "@core/common/util/assert";
import { {Entity}Repository } from "@core/domain/{entity-folder}/repository";
import { Delete{Entity}UseCase, Delete{Entity}UseCaseResult, Delete{Entity}UseCasePort } from "@core/domain/{entity-folder}/use-case";
import { {Entity}NotFoundException } from "@core/domain/{entity-folder}/exception";

export class Delete{Entity}Service implements Delete{Entity}UseCase {
  constructor(private readonly {entity}Repository: {Entity}Repository) {}

  public async execute(port: Delete{Entity}UseCasePort): Delete{Entity}UseCaseResult {
    const {entity} = await this.{entity}Repository.get{Entity}({ id: port.id });

    Assert.notNull({entity}, new {Entity}NotFoundException(port.id));

    {entity}.delete();
    await this.{entity}Repository.delete{Entity}({entity});

    return {entity};
  }
}
