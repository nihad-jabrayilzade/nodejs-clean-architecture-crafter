import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { Logger, ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from "@nestjs/swagger";
import { SecuritySchemeType } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";
import { ConfigService } from "@nestjs/config";
import { RootModule } from "@application/di/RootModule";

export class ServerApplication {
  private app: NestExpressApplication;

  private configService: ConfigService;

  private logger: Logger = new Logger(ServerApplication.name);

  public async run(): Promise<void> {
    this.app = await NestFactory.create<NestExpressApplication>(RootModule);

    this.configService = this.app.get(ConfigService);

    this.enableCors();

    this.useGlobalPipes();

    this.setGlobalPrefix();

    this.setupSwagger();

    const appPort = this.configService.get<number>("APP_PORT") as number;
    const appHostname = this.configService.get<string>("APP_HOSTNAME") as string;

    await this.app.listen(appPort, appHostname);

    this.logger.log(`App running at ${appHostname}:${appPort}`);
  }

  private enableCors(): void {
    this.app.enableCors();
  }

  private setupSwagger(): void {
    const path = this.configService.get<string>("SWAGGER_DOCS_PATH") as string;
    const version = this.configService.get<string>("SWAGGER_DOCS_VERSION") as string;

    const title = this.configService.get<string>("SWAGGER_DOCS_TITLE") as string;
    const description = this.configService.get<string>("SWAGGER_DOCS_DESCRIPTION") as string;

    const contactName = this.configService.get<string>("SWAGGER_CONTACT_NAME") as string;
    const contactURL = this.configService.get<string>("SWAGGER_CONTACT_URL") as string;
    const contactEmail = this.configService.get<string>("SWAGGER_CONTACT_EMAIL") as string;

    const bearerAuthType = this.configService.get<string>("SWAGGER_BEARER_AUTH_TYPE") as SecuritySchemeType;
    const bearerAuthIn = this.configService.get<string>("SWAGGER_BEARER_AUTH_IN") as string;
    const bearerAuthName = this.configService.get<string>("SWAGGER_BEARER_AUTH_NAME") as string;

    const options: Omit<OpenAPIObject, "paths"> = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setTitle(title)
      .setVersion(version)
      .setContact(contactName, contactURL, contactEmail)
      .addBearerAuth({ type: bearerAuthType, in: bearerAuthIn, name: bearerAuthName })
      .build();

    const document: OpenAPIObject = SwaggerModule.createDocument(this.app, options);
    SwaggerModule.setup(path, this.app, document);
  }

  private useGlobalPipes(): void {
    this.app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        stopAtFirstError: true,
        transformOptions: {
          exposeUnsetFields: false,
        },
      }),
    );
  }

  private setGlobalPrefix(): void {
    const appGlobalPrefix: string = this.configService.get<string>("APP_GLOBAL_PREFIX") as string;
    this.app.setGlobalPrefix(appGlobalPrefix);
  }

  public static new(): ServerApplication {
    return new ServerApplication();
  }
}
