import { joinPaths } from "./src/@lib/path";

const __src_dirname = "src";

export const __template_dirname = joinPaths(__dirname, ".template");
export const __template_src_dirname = joinPaths(__template_dirname, __src_dirname);

export const __output_dirname = joinPaths(__dirname, ".output");
export const __output_src_dirname = joinPaths(__output_dirname, __src_dirname);
