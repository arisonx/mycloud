import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { SignupUsecase } from "../application/usecases/signup.usecase";
import { IUserRepository } from "../domain/repositories/user.repository";
import { PrismaUserRepository } from "./databases/prisma/repositories/prisma-user-repository";
import { PrismaService } from "@/shared/infra/database/prisma/prisma.service";
import { EnvConfigModule } from "@/shared/infra/env-config/env-config.module";
import { IHashProvider } from "@/shared/application/providers/hash-provider";
import { BcryptjsHashProvider } from "./provider/hash-provider/bcryptjs-hash.provider";
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
      provide: IHashProvider,
      useClass: BcryptjsHashProvider,
    },
    {
      provide: SignupUsecase,
      useFactory: (userRepository: IUserRepository, hashProvider: IHashProvider) => {
        return new SignupUsecase(userRepository, hashProvider);
      },
      inject: [IUserRepository, IHashProvider],
    },
  ],
  imports: [EnvConfigModule],
})
export class UserModule {}
