import { EntityAlreadyExistsException } from '@core/common/exception'
import { {Entity} } from "@core/domain/{entity}/entity"

export class {Entity}AlreadyExistsException extends EntityAlreadyExistsException {
  constructor(id: {Entity}['id']) {
    super(`{Entity} with id ${id} already exists`)
    this.name = '{Entity}AlreadyExistsException'
  }
}