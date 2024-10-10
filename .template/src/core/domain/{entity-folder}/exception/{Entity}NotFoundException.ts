import { EntityNotFoundException } from "@core/common/exception";
import { {Entity} } from "@core/domain/{entity-folder}/entity";

export class {Entity}NotFoundException extends EntityNotFoundException {
  constructor(id: {Entity}["id"]) {
    super(`{Entity} with id ${id} not found`);
  }
}
