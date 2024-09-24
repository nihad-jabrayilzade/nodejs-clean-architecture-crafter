import { __output_dirname } from "../../dirnames";
import { createDir } from "../@lib/fs";
import generateConfigFiles from "./generateConfigFiles";
import generateCoreLayer from "./generateCoreLayer";

function processEntity(entityName: string) {
  createDir(__output_dirname);

  generateConfigFiles();

  generateCoreLayer(entityName);
}

export default processEntity;
