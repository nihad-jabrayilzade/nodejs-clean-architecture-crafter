import { GetEntitiesUseCaseResult } from '@core/common/use-case';
import { {Entity} } from '@core/domain/{entity}/entity';

export type Get{Entities}UseCaseResult = Promise<GetEntitiesUseCaseResult<{Entity}>>;