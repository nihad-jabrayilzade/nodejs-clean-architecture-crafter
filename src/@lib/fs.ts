import fs from "fs";

export function readFile(path: string): string {
  return fs.readFileSync(path, "utf8");
}

export function writeFile(path: string, content: string) {
  return fs.writeFileSync(path, content, "utf8");
}

export function copyFile(src: string, dest: string): void {
  return fs.copyFileSync(src, dest);
}

export function removeFile(path: string) {
  return fs.unlinkSync(path);
}

export function createDir(dir: string, options?: fs.MakeDirectoryOptions): string | undefined {
  return fs.mkdirSync(dir, options);
}

export function readDir(
  path: string,
  options?:
    | {
        encoding: BufferEncoding | null;
        withFileTypes?: false | undefined;
        recursive?: boolean | undefined;
      }
    | BufferEncoding
    | null,
): string[] {
  return fs.readdirSync(path, options);
}

export function removeDir(path: string) {
  return fs.rmdirSync(path);
}

export function renamePath(oldPath: string, newPath: string) {
  return fs.renameSync(oldPath, newPath);
}

export function isDirectory(path: string) {
  return fs.lstatSync(path).isDirectory();
}

export function isFile(path: string) {
  return fs.lstatSync(path).isFile();
}

export function isExists(path: string): boolean {
  return fs.existsSync(path);
}
