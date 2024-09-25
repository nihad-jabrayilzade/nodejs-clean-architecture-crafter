import { UseCase } from "@core/common/use-case";
import { Update{Entity}UseCasePort, Update{Entity}UseCaseResult } from "@core/domain/{entity}/use-case";

export type Update{Entity}UseCase = UseCase<Update{Entity}UseCasePort, Update{Entity}UseCaseResult>;
