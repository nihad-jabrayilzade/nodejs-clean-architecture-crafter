import inquirer from "inquirer";
import { ProjectInitializationAnswers, Framework, Orm, PackageManager } from "./@abstraction";
import { __output_dirname, __output_src_dirname } from "../dirnames";
import generateConfigFiles from "./@scripts/generateConfigFiles";

async function initializeProject() {
  const answers = await inquirer.prompt<ProjectInitializationAnswers>([
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
      name: "packageManager",
      message: "Which package manager do you want to use?",
      choices: [
        { name: "NPM", value: PackageManager.NPM },
        { name: "Yarn", value: PackageManager.Yarn, disabled: true, description: "In development" },
        { name: "PNPM", value: PackageManager.PNPM, disabled: true, description: "In development" },
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
  ]);

  generateConfigFiles(answers);
}

initializeProject();
