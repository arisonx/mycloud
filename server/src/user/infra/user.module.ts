import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { SignupUsecase } from "../application/usecases/signup.usecase";
import { IUserRepository } from "../domain/repositories/user.repository";
import { PrismaUserRepository } from "./databases/prisma/repositories/prisma-user-repository";
import { PrismaService } from "@/shared/infra/database/prisma/prisma.service";
import { EnvConfigModule } from "@/shared/infra/env-config/env-config.module";

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: "DBService",
      useClass: PrismaService,
    },

    {
      provide: IUserRepository,
      useFactory: (dbService: PrismaService) => {
        return new PrismaUserRepository(dbService);
      },
      inject: ["DBService"],
    },

    {
      provide: SignupUsecase,
      useFactory: (userRepository: IUserRepository) => {
        return new SignupUsecase(userRepository);
      },
      inject: [IUserRepository],
    },
  ],
  imports: [EnvConfigModule],
  exports: [UserController],
})
export class UserModule {}
