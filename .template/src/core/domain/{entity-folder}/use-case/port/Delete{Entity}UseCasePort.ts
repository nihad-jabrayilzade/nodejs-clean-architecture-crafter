import { DeleteEntityUseCasePort } from "@core/common/use-case/port";
import { {Entity} } from "@core/domain/{entity-folder}/entity";

export type Delete{Entity}UseCasePort = DeleteEntityUseCasePort<{Entity}>;
