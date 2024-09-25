import { __template_dirname, __output_dirname, __template_src_dirname, __output_src_dirname } from "../../dirnames";
import { copyDir, replacePlaceholders, createReplacements } from "../utils";
import { joinPaths } from "../@lib/path";
import { Layer } from "../@abstraction";

const coreLayerSourcePath = joinPaths(__template_src_dirname, Layer.Core);
const coreLayerDestinationPath = joinPaths(__output_src_dirname, Layer.Core);

function generateCoreLayer(entityName: string) {
  const replacements = createReplacements(entityName);

  copyDir(coreLayerSourcePath, coreLayerDestinationPath);
  replacePlaceholders(coreLayerDestinationPath, replacements);
}

export default generateCoreLayer;
