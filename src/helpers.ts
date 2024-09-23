import fs from "fs";
import path from "path";
import readline from "readline";
import { ReplacementKey, Replacements } from "./@type";

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
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function copyDirWithoutChanges(src: string, dest: string) {
  createDirIfNotExists(dest);

  fs.readdirSync(src).forEach((element: string) => {
    const srcPath = path.join(src, element);
    const destPath = path.join(dest, element);

    if (isDirectory(srcPath)) {
      copyDirWithoutChanges(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

export function copyTemplate(src: string, dest: string, replacements: Replacements) {
  createDirIfNotExists(dest);

  fs.readdirSync(src).forEach((element: string) => {
    const srcPath = path.join(src, element);
    const destPath = path.join(dest, replacePlaceholders(element, replacements));

    if (isDirectory(srcPath)) {
      copyTemplate(srcPath, destPath, replacements);
    } else {
      const content = fs.readFileSync(srcPath, "utf8");
      const replacedContent = replacePlaceholders(content, replacements);

      fs.writeFileSync(destPath, replacedContent, "utf8");
    }
  });
}

export function removeDirRecursive(dir: string) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file: string) => {
      const currentPath = path.join(dir, file);

      if (isDirectory(currentPath)) {
        removeDirRecursive(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });

    fs.rmdirSync(dir);
  }
}

export function eraseEntity(entityName: string) {
  const entityFolder = getEntityFolderName(entityName);

  const domainPath = path.join("src/core/domain", entityFolder);
  const servicePath = path.join("src/core/service", entityFolder);

  removeDirRecursive(domainPath);
  removeDirRecursive(servicePath);
}

export function askQuestion(query: string) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    }),
  );
}

export function isDirectory(path: string) {
  return fs.lstatSync(path).isDirectory();
}

export function isFile(path: string) {
  return fs.lstatSync(path).isFile();
}
