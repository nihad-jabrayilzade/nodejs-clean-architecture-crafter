import { __template_dirname, __output_dirname, __template_src_dirname, __output_src_dirname } from "../../dirnames";
import { copyDir, replacePlaceholders } from "../@util";
import { joinPaths } from "../@lib/path";
import { Layer, LayerGenerationProps } from "../@abstraction";

const infrastructureLayerSourcePath = joinPaths(__template_src_dirname, Layer.Infrastructure);
const infrastructureLayerDestinationPath = joinPaths(__output_src_dirname, Layer.Infrastructure);

function generateInfrastructureLayer({ replacements }: LayerGenerationProps) {
  copyDir(infrastructureLayerSourcePath, infrastructureLayerDestinationPath);
  replacePlaceholders(infrastructureLayerDestinationPath, replacements);
}

export default generateInfrastructureLayer;
