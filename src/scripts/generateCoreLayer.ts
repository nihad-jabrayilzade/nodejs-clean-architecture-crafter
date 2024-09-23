import fs from "fs";
import path from "path";
import __template_dirname from "../../__template_dirname";
import __output_dirname from "../../__output_dirname";

import { createDirIfNotExists, copyDirWithoutChanges, copyTemplate, replacePlaceholders, createReplacements, getEntityFolderName, isDirectory, isFile } from "../helpers";
import { Replacements } from "../@type";

const TEMPLATE_SRC_DIR = path.join(__template_dirname, "src");
const TEMPLATE_CORE_LAYER_DIR = path.join(TEMPLATE_SRC_DIR, "core");

const OUTPUT_SRC_DIR = path.join(__output_dirname, "src");
const OUTPUT_CORE_LAYER_DIR = path.join(OUTPUT_SRC_DIR, "core");

function copyCoreCommonDirectory() {
  const commonSrc = path.join(TEMPLATE_CORE_LAYER_DIR, "common");
  const commonDest = path.join(OUTPUT_CORE_LAYER_DIR, "common");

  copyDirWithoutChanges(commonSrc, commonDest);
}

function copyConfigFiles() {
  fs.readdirSync(__template_dirname).forEach((file) => {
    const srcPath = path.join(__template_dirname, file);
    const destPath = path.join(__output_dirname, file);

    if (isFile(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

function processTemplateFiles(replacements: Replacements) {
  fs.readdirSync(TEMPLATE_CORE_LAYER_DIR).forEach((element) => {
    if (element === "common") {
      return;
    }

    const srcPath = path.join(TEMPLATE_CORE_LAYER_DIR, element);
    let destPath;

    if (isDirectory(srcPath)) {
      destPath = path.join(OUTPUT_CORE_LAYER_DIR, element);
      copyTemplate(srcPath, destPath, replacements);
    } else {
      const content = fs.readFileSync(srcPath, "utf8");
      const replacedContent = replacePlaceholders(content, replacements);

      destPath = path.join(OUTPUT_CORE_LAYER_DIR, element, path.basename(srcPath));
      createDirIfNotExists(path.dirname(destPath));
      fs.writeFileSync(destPath, replacedContent, "utf8");
    }
  });
}

function generateCoreLayer(entityName: string) {
  const replacements = createReplacements(entityName);
  const entityFolderName = getEntityFolderName(entityName);

  const entityDomainPath = path.join(OUTPUT_CORE_LAYER_DIR, "domain", entityFolderName);
  const entityServicePath = path.join(OUTPUT_CORE_LAYER_DIR, "service", entityFolderName);

  createDirIfNotExists(entityDomainPath);

  copyCoreCommonDirectory();
  copyConfigFiles();
  processTemplateFiles(replacements);
}

export default generateCoreLayer;
