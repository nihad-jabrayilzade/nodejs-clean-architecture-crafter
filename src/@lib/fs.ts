import fs from "fs";

export function createDir(dir: string, options?: fs.MakeDirectoryOptions): string | undefined {
  return fs.mkdirSync(dir, options);
}

export function copyFile(src: string, dest: string): void {
  return fs.copyFileSync(src, dest);
}

export function readFile(path: string): string {
  return fs.readFileSync(path, "utf8");
}

export function readDir(path: string): string[] {
  return fs.readdirSync(path);
}

export function writeFile(path: string, content: string) {
  return fs.writeFileSync(path, content, "utf8");
}

export function removeFile(path: string) {
  return fs.unlinkSync(path);
}

export function removeDir(path: string) {
  return fs.rmdirSync(path);
}

export function isExists(path: string): boolean {
  return fs.existsSync(path);
}

export function isDirectory(path: string) {
  return fs.lstatSync(path).isDirectory();
}

export function isFile(path: string) {
  return fs.lstatSync(path).isFile();
}
