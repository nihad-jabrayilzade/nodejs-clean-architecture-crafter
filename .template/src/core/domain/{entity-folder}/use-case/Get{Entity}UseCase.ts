import { UseCase } from "@core/common/use-case";
import { Get{Entity}UseCasePort, Get{Entity}UseCaseResult } from "@core/domain/{entity}/use-case";

export type Get{Entity}UseCase = UseCase<Get{Entity}UseCasePort, Get{Entity}UseCaseResult>;
