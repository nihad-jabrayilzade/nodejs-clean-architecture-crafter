import { ReplacementKey, Replacements } from "./@abstraction";
import { copyFile, createDir, isDirectory, isExists, readDir, readFile, removeDir, removeFile, writeFile } from "./@lib/fs";
import { joinPaths } from "./@lib/path";

export function clearAndUpper(text: string) {
  return text.replace(/[-\s]/, "").toUpperCase();
}

export function toKebabCase(str: string) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export function toPascalCase(str: string) {
  return str.replace(/(^\w|-\w|\s\w)/g, clearAndUpper);
}

export function toCamelCase(str: string) {
  return str.replace(/(\s\w|-\w)/g, clearAndUpper).replace(/^./, str[0].toLowerCase());
}

export function replacePlaceholders(content: string, replacements: Replacements) {
  return content.replace(/{(\w+)}/g, (_, key: ReplacementKey) => replacements[key] || `{${key}}`);
}

export function getEntityFolderName(entityName: string) {
  return toKebabCase(entityName);
}

export function createReplacements(entityName: string) {
  return {
    entity: toCamelCase(entityName),
    entities: `${toCamelCase(entityName)}s`,
    Entity: toPascalCase(entityName),
    Entities: `${toPascalCase(entityName)}s`,
  };
}

export function createDirIfNotExists(dir: string) {
  if (!isExists(dir)) {
    createDir(dir, { recursive: true });
  }
}

export function copyDirWithoutChanges(src: string, dest: string) {
  createDirIfNotExists(dest);

  readDir(src).forEach((element: string) => {
    const srcPath = joinPaths(src, element);
    const destPath = joinPaths(dest, element);

    if (isDirectory(srcPath)) {
      copyDirWithoutChanges(srcPath, destPath);
    } else {
      copyFile(srcPath, destPath);
    }
  });
}

export function copyTemplate(src: string, dest: string, replacements: Replacements) {
  createDirIfNotExists(dest);

  readDir(src).forEach((element: string) => {
    const srcPath = joinPaths(src, element);
    const destPath = joinPaths(dest, replacePlaceholders(element, replacements));

    if (isDirectory(srcPath)) {
      copyTemplate(srcPath, destPath, replacements);
    } else {
      const content = readFile(srcPath);
      const replacedContent = replacePlaceholders(content, replacements);

      writeFile(destPath, replacedContent);
    }
  });
}

export function removeDirRecursive(dir: string) {
  if (isExists(dir)) {
    readDir(dir).forEach((file: string) => {
      const currentPath = joinPaths(dir, file);

      if (isDirectory(currentPath)) {
        removeDirRecursive(currentPath);
      } else {
        removeFile(currentPath);
      }
    });

    removeDir(dir);
  }
}

export function eraseEntity(entityName: string) {
  const entityFolder = getEntityFolderName(entityName);

  const domainPath = joinPaths("src/core/domain", entityFolder);
  const servicePath = joinPaths("src/core/service", entityFolder);

  removeDirRecursive(domainPath);
  removeDirRecursive(servicePath);
}
