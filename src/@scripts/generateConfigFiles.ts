import { __output_dirname, __output_src_dirname, __template_dirname } from "../../dirnames";
import { ProjectInitializationAnswers } from "../@abstraction";
import { copyFile, createDir, isFile, readDir } from "../@lib/fs";
import { joinPaths } from "../@lib/path";

function generateConfigFiles(_answers: ProjectInitializationAnswers) {
  createDir(__output_dirname);
  createDir(__output_src_dirname);

  readDir(__template_dirname).forEach((file) => {
    const srcPath = joinPaths(__template_dirname, file);
    const destPath = joinPaths(__output_dirname, file);

    if (isFile(srcPath)) {
      copyFile(srcPath, destPath);
    }
  });
}

export default generateConfigFiles;
