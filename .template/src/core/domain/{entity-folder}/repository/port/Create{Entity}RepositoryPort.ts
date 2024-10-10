import { CreateEntityRepositoryPort } from "@core/common/repository";
import { {Entity} } from "@core/domain/{entity-folder}/entity";

export type Create{Entity}RepositoryPort = CreateEntityRepositoryPort<{Entity}>;
