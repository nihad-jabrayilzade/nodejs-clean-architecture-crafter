import { __output_dirname, __output_src_dirname } from "../dirnames";
import { Framework, Orm, PackageManager } from "./@abstraction";
import { createReplacements } from "./@util";
import generateCoreLayer from "./@scripts/generateCoreLayer";
import generateInfrastructureLayer from "./@scripts/generateInfrastructureLayer";
import generateConfigFiles from "./@scripts/generateConfigFiles";

generateConfigFiles({
  framework: Framework.NestJS,
  packageManager: PackageManager.NPM,
  orm: Orm.TypeORM,
});

const replacements = createReplacements("user");
generateCoreLayer({ replacements });
generateInfrastructureLayer({ replacements });
// generateApplicationLayer(answers.name);
