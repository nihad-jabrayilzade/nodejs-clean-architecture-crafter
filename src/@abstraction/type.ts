import { Framework, Layer, Orm } from ".";

type ReplacementKey = "entity" | "Entity" | "entity-folder";

type Replacements = {
  [key in ReplacementKey]: string;
};

type Answers = {
  entityName: string;
  framework: Framework;
  orm: Orm;
  layer: Layer;
};

export { ReplacementKey, Replacements, Answers };
