import { __template_dirname, __output_dirname, __template_src_dirname, __output_src_dirname } from "../../dirnames";
import { copyDir, replacePlaceholders } from "../@util";
import { joinPaths } from "../@lib/path";
import { Layer, LayerGenerationProps } from "../@abstraction";

const applicationLayerSourcePath = joinPaths(__template_src_dirname, Layer.Application);
const applicationLayerDestinationPath = joinPaths(__output_src_dirname, Layer.Application);

function generateApplicationLayer({ replacements }: LayerGenerationProps) {
  copyDir(applicationLayerSourcePath, applicationLayerDestinationPath);
  replacePlaceholders(applicationLayerDestinationPath, replacements);
}

export default generateApplicationLayer;
