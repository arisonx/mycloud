import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { EnvConfigService } from "./shared/infra/env-config/env-config.service";
import { applyGlobalConfig } from "./global-config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(EnvConfigService);
  const port = configService.getAppPort();

  applyGlobalConfig(app);
  await app.listen(port || 4000);
}
bootstrap();
