import { __template_dirname, __output_dirname, __template_src_dirname, __output_src_dirname } from "../../dirnames";
import { copyDir } from "../@util";
import { joinPaths } from "../@lib/path";
import { Layer } from "../@abstraction";
import { createDir } from "../@lib/fs";

const sourcePath = joinPaths(__template_src_dirname, Layer.CoreCommon);

const coreLayerDestinationPath = joinPaths(__output_src_dirname, Layer.Core);
const coreCommonLayerDestinationPath = joinPaths(__output_src_dirname, Layer.CoreCommon);

export function generateCoreCommonLayer() {
  createDir(coreLayerDestinationPath);
  copyDir(sourcePath, coreCommonLayerDestinationPath);
}
