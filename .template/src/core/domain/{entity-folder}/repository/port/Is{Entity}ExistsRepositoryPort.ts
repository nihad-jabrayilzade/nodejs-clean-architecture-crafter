import { RequireAtLeastOne } from "@core/common/type";
import { {Entity} } from "@core/domain/{entity-folder}/entity";

export type Is{Entity}ExistsRepositoryPort = RequireAtLeastOne<Pick<{Entity}, "id">>;
