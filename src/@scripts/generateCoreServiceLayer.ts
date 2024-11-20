import { __template_dirname, __output_dirname, __template_src_dirname, __output_src_dirname } from "../../dirnames";
import { copyDir, replacePlaceholders } from "../@util";
import { joinPaths } from "../@lib/path";
import { Layer, LayerGenerationProps } from "../@abstraction";

const sourcePath = joinPaths(__template_src_dirname, Layer.CoreService);
const destinationPath = joinPaths(__output_src_dirname, Layer.CoreService);

export function generateCoreServiceLayer({ replacements }: LayerGenerationProps) {
  copyDir(sourcePath, destinationPath);
  replacePlaceholders(destinationPath, replacements);
}
