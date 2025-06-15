import { Module } from "@nestjs/common";
import { StorageProviderController } from "./infra/storageprovider.controller";
import { SaveStorageProviderUsecase } from "./application/usecase/save-storageprovider.usecase";
import { IStorageProviderRepository } from "./domain/repositories/storageprovider.repository";
import { PrismaCloudProviderRepository } from "./infra/databases/prisma/repositories/prisma-cloudprovider.repository";
import { IStorageProviderCredentialsRepository } from "./domain/repositories/storageprovider-credentials.repository";
import { PrismaStorageProviderCredentialsRepository } from "./infra/databases/prisma/repositories/prisma-storageprovider-credentials.repository";
import { IUserRepository } from "@/user/domain/repositories/user.repository";
import { PrismaUserRepository } from "@/user/infra/databases/prisma/repositories/prisma-user-repository";

@Module({
  controllers: [StorageProviderController],
  providers: [
    SaveStorageProviderUsecase,
    {
      provide: IStorageProviderRepository,
      useClass: PrismaCloudProviderRepository,
    },
    {
      provide: IStorageProviderCredentialsRepository,
      useClass: PrismaStorageProviderCredentialsRepository,
    },
    {
      provide: IUserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class StorageproviderModule {}
