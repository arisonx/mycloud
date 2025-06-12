import { Module } from '@nestjs/common';
import { EnvConfigModule } from '@/shared/infra/env-config/env-config.module';
import { DatabaseModule } from './shared/infra/database/database.module';
import { CloudModule } from './shared/infra/cloud-providers/cloud.module';

@Module({
  imports: [
    EnvConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    CloudModule
  ],
})
export class AppModule {}
