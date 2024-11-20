import { Framework, Orm } from ".";

type ReplacementKey = "entity" | "Entity" | "entity-folder" | "entity-controller";

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
};

type LayerGenerationProps = {
  replacements: Replacements;
};

export { ReplacementKey, Replacements, ProjectInitializationAnswers, EntityProcessingAnswers, LayerGenerationProps };
