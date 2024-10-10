import { UpdateEntityUseCaseResult } from "@core/common/use-case";
import { {Entity} } from "@core/domain/{entity-folder}/entity";

export type Update{Entity}UseCaseResult = UpdateEntityUseCaseResult<{Entity}>;
