import { GetEntitiesUseCaseResult } from "@core/common/use-case";
import { {Entity} } from "@core/domain/{entity-folder}/entity";

export type Get{Entity}sUseCaseResult = Promise<GetEntitiesUseCaseResult<{Entity}>>;
