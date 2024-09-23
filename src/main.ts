import inquirer from "inquirer";
import processEntity from "./scripts/processEntity";
import { Framework, Layer } from "./@type";

async function main() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "entityName",
      message: "Enter entity name: (In singular form e.g. user, user transaction)",
      validate: (input: string) => {
        if (!input.trim()) {
          return "Entity name cannot be empty.";
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
        { name: "TypeORM", value: "typeorm" },
        { name: "Sequelize (In development)", value: "sequelize", disabled: true, description: "In development" },
        { name: "Prisma (In development)", value: "prisma", disabled: true, description: "In development" },
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

  console.log(answers);

  // processEntity(entityName);
}

main();
