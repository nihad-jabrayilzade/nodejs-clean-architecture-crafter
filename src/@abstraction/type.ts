import { Framework, Layer, Orm } from ".";

type ReplacementKey = "entity" | "Entity" | "entity-folder";

type Replacements = {
  [key in ReplacementKey]: string;
};

type ProjectInitializationAnswers = {
  framework: Framework;
  packageManager: string;
  orm: Orm;
};

type EntityProcessingAnswers = {
  name: string;
  layer: Layer & "all";
};

type LayerGenerationProps = {
  replacements: Replacements;
};

export { ReplacementKey, Replacements, ProjectInitializationAnswers, EntityProcessingAnswers, LayerGenerationProps };
