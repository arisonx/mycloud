import { Module } from "@nestjs/common";
import { EnvConfigModule } from "@/shared/infra/env-config/env-config.module";
import { DatabaseModule } from "./shared/infra/database/database.module";
import { CloudModule } from "./shared/infra/cloud-providers/cloud.module";
import { StorageModule } from "./storage/storage.module";

@Module({
  imports: [
    EnvConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    CloudModule,
    StorageModule,
  ],
})
export class AppModule {}
