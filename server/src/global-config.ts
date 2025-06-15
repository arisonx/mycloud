import { ClassSerializerInterceptor, INestApplication, ValidationPipe } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { WrapperDataInterceptor } from "@/shared/infra/interceptors/wrapper-data.interceptor";
import { ConflictErrorFilter } from "@/shared/infra/exception-filters/conflict-error/conflict-error.filter";
import { NotFoundErrorFilter } from "@/shared/infra/exception-filters/not-found-error/not-found-error.filter";
import { InvalidPasswordErrorFilter } from "@/shared/infra/exception-filters/invalid-password-error/invalid-password-error.filter";
import { InvalidCredentialsErrorFilter } from "@/shared/infra/exception-filters/invalid-credentials-error/invalid-credentials-error.filter";
import { EntityValidationErrorFilter } from "@/shared/infra/exception-filters/validation-error/validation-error.filter";

export function applyGlobalConfig(app: INestApplication) {
  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );
  app.enableCors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Authorization", "Content-Type"],
  });
  app.useGlobalInterceptors(new WrapperDataInterceptor(), new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalFilters(
    new ConflictErrorFilter(),
    new NotFoundErrorFilter(),
    new InvalidPasswordErrorFilter(),
    new InvalidCredentialsErrorFilter(),
    new EntityValidationErrorFilter()
  );
}
    