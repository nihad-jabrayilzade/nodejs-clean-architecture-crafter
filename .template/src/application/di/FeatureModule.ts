import { Module } from "@nestjs/common";

import { {Entity}Module } from "@application/di/feature/{Entity}Module";

@Module({
  imports: [{Entity}Module],
})
export class FeatureModule {}
