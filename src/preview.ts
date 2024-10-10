import { __output_dirname, __output_src_dirname } from "../dirnames";
import { Framework, Orm, PackageManager } from "./@abstraction";
import { createReplacements } from "./@util";
import generateCoreLayer from "./@scripts/generateCoreLayer";
import generateApplicationLayer from "./@scripts/generateApplicationLayer";
import generateInfrastructureLayer from "./@scripts/generateInfrastructureLayer";
import generateConfigFiles from "./@scripts/generateConfigFiles";

generateConfigFiles({
  framework: Framework.NestJS,
  packageManager: PackageManager.NPM,
  orm: Orm.TypeORM,
});

const replacements = createReplacements("user transaction");
generateCoreLayer({ replacements });
generateInfrastructureLayer({ replacements });
generateApplicationLayer({ replacements });
