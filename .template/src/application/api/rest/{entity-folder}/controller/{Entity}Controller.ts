import { Controller, Inject, Body, Query, Param, ParseIntPipe, Get, Post, Put, Delete } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { RestApiGet{Entity}sQuery, RestApiCreate{Entity}Body, RestApiUpdate{Entity}Body } from "@application/api/rest/{entity-folder}/documentation";
import { {Entity}DITokens } from "@core/domain/{entity-folder}/di";
import {
  Get{Entity}UseCase,
  Get{Entity}UseCaseResult,
  Get{Entity}sUseCase,
  Get{Entity}sUseCaseResult,
  Create{Entity}UseCase,
  Create{Entity}UseCaseResult,
  Update{Entity}UseCase,
  Update{Entity}UseCaseResult,
  Delete{Entity}UseCase,
  Delete{Entity}UseCaseResult,
} from "@core/domain/{entity-folder}/use-case";


@Controller("{entity-controller}")
@ApiTags("{Entity}s")
@ApiBearerAuth()
export class {Entity}Controller {
  constructor(
    @Inject({Entity}DITokens.Get{Entity}UseCase) private readonly get{Entity}UseCase: Get{Entity}UseCase,
    @Inject({Entity}DITokens.Get{Entity}sUseCase) private readonly get{Entity}sUseCase: Get{Entity}sUseCase,
    @Inject({Entity}DITokens.Create{Entity}UseCase) private readonly create{Entity}UseCase: Create{Entity}UseCase,
    @Inject({Entity}DITokens.Update{Entity}UseCase) private readonly update{Entity}UseCase: Update{Entity}UseCase,
    @Inject({Entity}DITokens.Delete{Entity}UseCase) private readonly delete{Entity}UseCase: Delete{Entity}UseCase,
  ) {}

  @Get()
  public async get{Entity}s(@Query() query: RestApiGet{Entity}sQuery): Get{Entity}sUseCaseResult {
    const result = await this.get{Entity}sUseCase.execute({
      offset: query.offset,
      limit: query.limit,
    });

    return result;
  }

  @Get(":id")
  public async get{Entity}(@Param("id", new ParseIntPipe()) id: number): Get{Entity}UseCaseResult {
    const result = await this.get{Entity}UseCase.execute({
      id,
    });

    return result;
  }

  @Post()
  public async create{Entity}(@Body() body: RestApiCreate{Entity}Body): Create{Entity}UseCaseResult {
    const result = await this.create{Entity}UseCase.execute(body);

    return result;
  }

  @Put(":id")
  public async update{Entity}(@Param("id", new ParseIntPipe()) id: number, @Body() body: RestApiUpdate{Entity}Body): Update{Entity}UseCaseResult {
    const result = await this.update{Entity}UseCase.execute({
      id,
      ...body,
    });

    return result;
  }

  @Delete(":id")
  public async delete{Entity}(@Param("id", new ParseIntPipe()) id: number): Delete{Entity}UseCaseResult {
    const result = await this.delete{Entity}UseCase.execute({
      id,
    });

    return result;
  }
}
