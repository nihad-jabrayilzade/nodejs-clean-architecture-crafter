import { __output_dirname, __output_src_dirname } from "../../dirnames";
import { createDir } from "../@lib/fs";
import generateConfigFiles from "./generateConfigFiles";
import generateCoreLayer from "./generateCoreLayer";

function processEntity(entityName: string) {
  createDir(__output_dirname);
  createDir(__output_src_dirname);

  generateConfigFiles();
  generateCoreLayer(entityName);
}

export default processEntity;
