import { UseCase } from "@core/common/use-case";
import { Get{Entity}sUseCasePort, Get{Entity}sUseCaseResult } from "@core/domain/{entity-folder}/use-case";

export type Get{Entity}sUseCase = UseCase<Get{Entity}sUseCasePort, Get{Entity}sUseCaseResult>;
