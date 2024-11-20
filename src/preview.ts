import { __output_dirname, __output_src_dirname } from "../dirnames";
import { Framework, Orm, PackageManager } from "./@abstraction";
import { createReplacements } from "./@util";
import { generateCoreDomainLayer, generateApplicationLayer, generateInfrastructureLayer, generateConfigFiles } from "./@scripts";

generateConfigFiles({
  framework: Framework.NestJS,
  packageManager: PackageManager.NPM,
  orm: Orm.TypeORM,
});

const replacements = createReplacements("user transaction");
generateCoreDomainLayer({ replacements });
generateInfrastructureLayer({ replacements });
generateApplicationLayer({ replacements });
