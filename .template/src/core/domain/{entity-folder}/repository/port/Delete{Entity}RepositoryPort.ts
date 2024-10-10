import { DeleteEntityRepositoryPort } from "@core/common/repository";
import { {Entity} } from "@core/domain/{entity-folder}/entity";

export type Delete{Entity}RepositoryPort = DeleteEntityRepositoryPort<{Entity}>;
