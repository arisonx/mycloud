import { DynamicModule, Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { EnvConfigModule } from "../env-config/env-config.module";
import { ConfigService } from "@nestjs/config";

@Global()
@Module({
  imports: [EnvConfigModule.forRoot()],
  providers: [ConfigService, PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
