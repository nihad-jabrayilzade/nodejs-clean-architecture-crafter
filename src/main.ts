import inquirer from "inquirer";
import processEntity from "./scripts/processEntity";
import { Answers, Framework, Layer, Orm } from "./@abstraction";
import { EntityNameRegex } from "./@rule";

async function main() {
  const answers = await inquirer.prompt<Answers>([
    {
      type: "input",
      name: "entityName",
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
      name: "framework",
      message: "Which framework do you want to use?",
      choices: [
        { name: "NestJS", value: Framework.NestJS },
        { name: "Express (In development)", value: Framework.Express, disabled: true, description: "In development" },
      ],
    },
    {
      type: "list",
      name: "orm",
      message: "Which ORM do you want to use?",
      choices: [
        { name: "TypeORM", value: Orm.TypeORM },
        { name: "Sequelize (In development)", value: Orm.Sequelize, disabled: true, description: "In development" },
        { name: "Prisma (In development)", value: Orm.Prisma, disabled: true, description: "In development" },
      ],
    },
    {
      type: "list",
      name: "layer",
      message: "Which layer do you want to generate?",
      choices: [
        { name: "All", value: "all" },
        { name: "Core", value: Layer.Core },
        { name: "Application", value: Layer.Application },
        { name: "Infrastructure", value: Layer.Infrastructure },
      ],
    },
  ]);

  processEntity(answers.entityName);
}

main();
