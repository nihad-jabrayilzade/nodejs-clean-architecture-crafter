import { __template_dirname, __output_dirname, __template_src_dirname, __output_src_dirname } from "../../dirnames";
import { copyDir, replacePlaceholders } from "../@util";
import { joinPaths } from "../@lib/path";
import { Layer, LayerGenerationProps } from "../@abstraction";

const sourcePath = joinPaths(__template_src_dirname, Layer.CoreDomain);
const destinationPath = joinPaths(__output_src_dirname, Layer.CoreDomain);

export function generateCoreDomainLayer({ replacements }: LayerGenerationProps) {
  copyDir(sourcePath, destinationPath);
  replacePlaceholders(destinationPath, replacements);
}
