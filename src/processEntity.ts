import inquirer from "inquirer";
import { __output_dirname, __output_src_dirname } from "../dirnames";
import { EntityProcessingAnswers } from "./@abstraction";
import { EntityNameRegex } from "./@rule";
import { createReplacements } from "./@util";
import { generateCoreDomainLayer, generateInfrastructureLayer, generateApplicationLayer, generateCoreServiceLayer } from "./@scripts";

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
  ]);

  const replacements = createReplacements(answers.name);

  generateCoreDomainLayer({ replacements });
  generateCoreServiceLayer({ replacements });
  generateInfrastructureLayer({ replacements });
  generateApplicationLayer({ replacements });
}

processEntity();
