import inquirer from "inquirer";
import { __output_dirname, __output_src_dirname } from "../dirnames";
import { EntityProcessingAnswers, Layer } from "./@abstraction";
import generateCoreLayer from "./@scripts/generateCoreLayer";
import { EntityNameRegex } from "./@rule";
import { createReplacements } from "./@util";
import generateInfrastructureLayer from "./@scripts/generateInfrastructureLayer";

async function processEntity() {
  const answers = await inquirer.prompt<EntityProcessingAnswers>([
    {
      type: "input",
      name: "name",
      message: "Enter entity name: (In singular form e.g. user, user transaction)",
      validate: (rawInput: string) => {
        const input = rawInput.trim();
        if (!input) {
          return "Entity name cannot be empty.";
        }

        if (!EntityNameRegex.test(input)) {
          return "Entity name must be in the form 'word' or 'word word'.";
        }

        return true;
      },
    },
    {
      type: "list",
      name: "layer",
      message: "Which layer do you want to generate?",
      choices: [
        { name: "All", value: "all" },
        { name: "Core", value: Layer.Core },
        { name: "Infrastructure", value: Layer.Infrastructure },
        { name: "Application", value: Layer.Application },
      ],
    },
  ]);

  const replacements = createReplacements(answers.name);

  switch (answers.layer) {
    case "all":
      generateCoreLayer({ replacements });
      generateInfrastructureLayer({ replacements });
      // generateApplicationLayer(answers.name);
      break;
    case Layer.Core:
      generateCoreLayer({ replacements });
      break;
    case Layer.Infrastructure:
      generateInfrastructureLayer({ replacements });
      break;
    case Layer.Application:
      // generateApplicationLayer(answers.name);
      break;
  }
}

processEntity();
