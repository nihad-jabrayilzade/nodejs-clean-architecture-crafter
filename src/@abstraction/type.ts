import { Framework, Layer, Orm } from ".";

type ReplacementKey = "entity" | "entities" | "Entity" | "Entities";

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
