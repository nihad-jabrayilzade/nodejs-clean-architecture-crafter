import { __template_dirname, __output_dirname, __template_src_dirname, __output_src_dirname } from "../../dirnames";
import { createDirIfNotExists, copyDirWithoutChanges, copyTemplate, replacePlaceholders, createReplacements, getEntityFolderName } from "../utils";
import { Replacements } from "../@abstraction";
import { isDirectory, readDir, readFile, writeFile } from "../@lib/fs";
import { getBasename, getDirname, joinPaths } from "../@lib/path";

const templateCoreLayerPath = joinPaths(__template_src_dirname, "core");
const outputCoreLayerPath = joinPaths(__output_src_dirname, "core");

function copyCoreCommonDirectory() {
  const commonLayerSourcePath = joinPaths(templateCoreLayerPath, "common");
  const commonLayerDestinationPath = joinPaths(outputCoreLayerPath, "common");

  copyDirWithoutChanges(commonLayerSourcePath, commonLayerDestinationPath);
}

function processTemplateFiles(replacements: Replacements) {
  readDir(templateCoreLayerPath).forEach((element) => {
    if (element === "common") {
      return;
    }

    const sourcePath = joinPaths(templateCoreLayerPath, element);
    let destinationPath;

    if (isDirectory(sourcePath)) {
      destinationPath = joinPaths(outputCoreLayerPath, element);
      copyTemplate(sourcePath, destinationPath, replacements);
    } else {
      const content = readFile(sourcePath);
      const replacedContent = replacePlaceholders(content, replacements);

      destinationPath = joinPaths(outputCoreLayerPath, element, getBasename(sourcePath));
      createDirIfNotExists(getDirname(destinationPath));
      writeFile(destinationPath, replacedContent);
    }
  });
}

function generateCoreLayer(entityName: string) {
  const replacements = createReplacements(entityName);
  const entityFolderName = getEntityFolderName(entityName);

  const entityDomainLayerPath = joinPaths(outputCoreLayerPath, "domain", entityFolderName);

  createDirIfNotExists(entityDomainLayerPath);

  copyCoreCommonDirectory();
  processTemplateFiles(replacements);
}

export default generateCoreLayer;
