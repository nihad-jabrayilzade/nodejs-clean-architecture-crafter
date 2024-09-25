import { {Entity} } from "@core/domain/{entity}/entity";

export type Create{Entity}UseCasePort = {
  // REPLACE: Add the required unique field for creating {entity}
  id: {Entity}['id']
};