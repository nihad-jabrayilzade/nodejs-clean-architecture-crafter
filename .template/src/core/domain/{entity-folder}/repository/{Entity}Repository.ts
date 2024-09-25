import { 
  Get{Entity}RepositoryPort,
  Get{Entity}RepositoryResult,
  Get{Entities}RepositoryPort,
  Get{Entities}RepositoryResult,
  Create{Entity}RepositoryPort,
  Create{Entity}RepositoryResult,
  Update{Entity}RepositoryPort,
  Update{Entity}RepositoryResult,
  Delete{Entity}RepositoryPort,
  Delete{Entity}RepositoryResult,
  Is{Entity}ExistsRepositoryPort,
} from '@core/domain/{entity}/repository';

export interface {Entity}Repository {
  get{Entity}(port: Get{Entity}RepositoryPort): Promise<Get{Entity}RepositoryResult>;
  get{Entities}(port: Get{Entities}RepositoryPort): Promise<Get{Entities}RepositoryResult>;
  create{Entity}(port: Create{Entity}RepositoryPort): Promise<Create{Entity}RepositoryResult>;
  update{Entity}(port: Update{Entity}RepositoryPort): Promise<Update{Entity}RepositoryResult>;
  delete{Entity}(port: Delete{Entity}RepositoryPort): Promise<Delete{Entity}RepositoryResult>;
  exists(port: Is{Entity}ExistsRepositoryPort): Promise<boolean>;
}