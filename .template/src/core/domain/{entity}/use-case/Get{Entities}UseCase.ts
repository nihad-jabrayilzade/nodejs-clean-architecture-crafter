import { UseCase } from "@core/common/use-case";
import { Get{Entities}UseCasePort, Get{Entities}UseCaseResult } from "@core/domain/{entity}/use-case";

export type Get{Entities}UseCase = UseCase<Get{Entities}UseCasePort, Get{Entities}UseCaseResult>;
