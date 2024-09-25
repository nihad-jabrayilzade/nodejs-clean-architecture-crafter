import { UseCase } from "@core/common/use-case";
import { Create{Entity}UseCasePort, Create{Entity}UseCaseResult } from "@core/domain/{entity-folder}/use-case";

export type Create{Entity}UseCase = UseCase<Create{Entity}UseCasePort, Create{Entity}UseCaseResult>;
