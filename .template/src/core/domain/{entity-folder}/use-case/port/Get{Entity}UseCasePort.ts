import { GetEntityUseCasePort } from "@core/common/use-case/port";
import { {Entity} } from "@core/domain/{entity-folder}/entity";

export type Get{Entity}UseCasePort = GetEntityUseCasePort<{Entity}>;
