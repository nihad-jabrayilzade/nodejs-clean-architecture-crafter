import { __output_dirname, __output_src_dirname, __template_dirname } from "../../dirnames";
import { ProjectInitializationAnswers } from "../@abstraction";
import { copyFile, createDir, isFile, readDir } from "../@lib/fs";
import { joinPaths } from "../@lib/path";

export function generateConfigFiles(_answers: ProjectInitializationAnswers) {
  createDir(__output_dirname);
  createDir(__output_src_dirname);

  readDir(__template_dirname).forEach((file) => {
    const sourcePath = joinPaths(__template_dirname, file);
    const destinationPath = joinPaths(__output_dirname, file);

    if (isFile(sourcePath)) {
      copyFile(sourcePath, destinationPath);
    }
  });
}
