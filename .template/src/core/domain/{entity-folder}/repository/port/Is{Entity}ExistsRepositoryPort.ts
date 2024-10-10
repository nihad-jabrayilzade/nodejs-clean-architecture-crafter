import { IsEntityExistsRepositoryPort } from "@core/common/repository";
import { {Entity} } from "@core/domain/{entity-folder}/entity";

export type Is{Entity}ExistsRepositoryPort = IsEntityExistsRepositoryPort<{Entity}>;
