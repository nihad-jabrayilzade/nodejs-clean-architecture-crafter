import { CreateEntityRepositoryResult } from "@core/common/repository";
import { Create{Entity}UseCaseResult } from "@core/domain/{entity-folder}/use-case";

export type Create{Entity}RepositoryResult = Create{Entity}UseCaseResult & CreateEntityRepositoryResult;
