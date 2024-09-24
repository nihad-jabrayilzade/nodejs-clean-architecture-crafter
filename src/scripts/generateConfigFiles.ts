import { __output_dirname, __template_dirname } from "../../dirnames";
import { copyFile, isFile, readDir } from "../@lib/fs";
import { joinPaths } from "../@lib/path";

function generateConfigFiles() {
  readDir(__template_dirname).forEach((file) => {
    const srcPath = joinPaths(__template_dirname, file);
    const destPath = joinPaths(__output_dirname, file);

    if (isFile(srcPath)) {
      copyFile(srcPath, destPath);
    }
  });
}

export default generateConfigFiles;
