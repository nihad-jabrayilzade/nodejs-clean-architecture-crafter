import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { InfrastructureModule } from "@application/di/InfrastructureModule";
import { ApplicationModule } from "@application/di/ApplicationModule";
import { FeatureModule } from "@application/di/FeatureModule";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env", `.env.${process.env.NODE_ENV}`],
    }),

    FeatureModule,
    ApplicationModule,
    InfrastructureModule,
  ],
})
export class RootModule {}
