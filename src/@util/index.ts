import { Replacements } from "../@abstraction";
import { copyFile, createDir, isDirectory, readDir, readFile, renamePath, writeFile } from "../@lib/fs";
import { joinPaths } from "../@lib/path";

export function createReplacements(entityName: string) {
  return {
    entity: NamingConvention.toCamelCase(entityName),
    Entity: NamingConvention.toPascalCase(entityName),
    "entity-folder": getEntityFolderName(entityName),
    "entity-controller": getEntityFolderName(entityName),
  };
}

export function copyDir(sourcePath: string, destinationPath: string) {
  createDir(destinationPath);

  readDir(sourcePath).forEach((element: string) => {
    const sourcePathPath = joinPaths(sourcePath, element);
    const destinationPathPath = joinPaths(destinationPath, element);

    if (isDirectory(sourcePathPath)) {
      copyDir(sourcePathPath, destinationPathPath);
    } else {
      copyFile(sourcePathPath, destinationPathPath);
    }
  });
}

export function replacePlaceholders(path: string, replacements: Replacements) {
  const items = readDir(path);

  for (const item of items) {
    const itemPath = joinPaths(path, item);
    const newItemPath = replacePlaceholdersInPath(itemPath, replacements);

    if (isDirectory(newItemPath)) {
      replacePlaceholders(newItemPath, replacements);
    } else {
      replacePlaceholdersInFile(newItemPath, replacements);
    }
  }
}

const NamingConvention = {
  clearAndUpper: (text: string) => text.replace(/[-\s]/, "").toUpperCase(),
  toKebabCase: (str: string) =>
    str
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/\s+/g, "-")
      .toLowerCase(),
  toPascalCase: (str: string) => str.replace(/(^\w|-\w|\s\w)/g, NamingConvention.clearAndUpper),
  toCamelCase: (str: string) => str.replace(/(\s\w|-\w)/g, NamingConvention.clearAndUpper).replace(/^./, str[0].toLowerCase()),
};

function getEntityFolderName(entityName: string) {
  return NamingConvention.toKebabCase(entityName);
}

function replacePlaceholdersInFile(path: string, replacements: Replacements) {
  const content = readFile(path);

  const newContent = content
    .replace(/{entity}/g, replacements.entity)
    .replace(/{Entity}/g, replacements.Entity)
    .replace(/{entity-folder}/g, replacements["entity-folder"])
    .replace(/{entity-controller}/g, replacements["entity-controller"]);

  writeFile(path, newContent);
}

function replacePlaceholdersInPath(path: string, replacements: Replacements) {
  const newPath = path.replace(/{Entity}/g, replacements.Entity).replace(/{entity-folder}/g, replacements["entity-folder"]);

  if (newPath !== path) {
    renamePath(path, newPath);
  }
  return newPath;
}
