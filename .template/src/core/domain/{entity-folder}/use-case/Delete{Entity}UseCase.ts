import { UseCase } from "@core/common/use-case";
import { Delete{Entity}UseCasePort, Delete{Entity}UseCaseResult } from "@core/domain/{entity}/use-case";

export type Delete{Entity}UseCase = UseCase<Delete{Entity}UseCasePort, Delete{Entity}UseCaseResult>;
