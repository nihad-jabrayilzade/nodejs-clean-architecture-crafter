import p from "path";

export function getBasename(path: string): string {
  return p.basename(path);
}

export function getDirname(path: string): string {
  return p.dirname(path);
}

export function joinPaths(...paths: string[]): string {
  return p.join(...paths);
}
