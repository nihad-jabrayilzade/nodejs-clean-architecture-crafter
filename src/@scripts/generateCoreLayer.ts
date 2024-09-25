import { __template_dirname, __output_dirname, __template_src_dirname, __output_src_dirname } from "../../dirnames";
import { copyDir, replacePlaceholders } from "../@util";
import { joinPaths } from "../@lib/path";
import { Layer, LayerGenerationProps } from "../@abstraction";

const coreLayerSourcePath = joinPaths(__template_src_dirname, Layer.Core);
const coreLayerDestinationPath = joinPaths(__output_src_dirname, Layer.Core);

function generateCoreLayer({ replacements }: LayerGenerationProps) {
  copyDir(coreLayerSourcePath, coreLayerDestinationPath);
  replacePlaceholders(coreLayerDestinationPath, replacements);
}

export default generateCoreLayer;
