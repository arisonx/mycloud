import { R2Credentials, S3Credentials } from "@/storageprovider/domain/types/storage-credentials.type";
import { StorageProviderEntity } from "@/storageprovider/domain/entities/storageprovider.entity";
import { IStorageProviderRepository } from "@/storageprovider/domain/repositories/storageprovider.repository";
import { BadRequestException, Injectable } from "@nestjs/common";
import { UseCase } from "@/shared/application/usecases/use-case";
import { StorageProviderType } from "@/storageprovider/domain/enums/StorageProviderType.enum";
import { StorageProviderCredentialsEntity } from "@/storageprovider/domain/entities/storageprovider-credentials.entity";
import { IStorageProviderCredentialsRepository } from "@/storageprovider/domain/repositories/storageprovider-credentials.repository";
import { IUserRepository } from "@/user/domain/repositories/user.repository";

type Input = {
  name: string;
  active: boolean;
  type: string;
  uploads: [];
  userId: string;
  credentials: {
    type: string;
    [key: string]: any;
  };
};

type Output = void;

@Injectable()
export class SaveStorageProviderUsecase implements UseCase<Input, Output> {
  constructor(
    private readonly storageProviderRepository: IStorageProviderRepository,
    private readonly storageProviderCredentialsRepository: IStorageProviderCredentialsRepository,
    private readonly userRepository: IUserRepository
  ) {}

  async execute(input: Input): Promise<Output> {
    const userExists = await this.userRepository.findById(input.userId);

    if (!userExists) {
      throw new BadRequestException("User not found");
    }

    const storageProviderExists = await this.storageProviderRepository.findByName(input.name);

    if (storageProviderExists) {
      throw new BadRequestException("Storage provider already exists");
    }

    switch (input.type as StorageProviderType) {
      case StorageProviderType.CLOUDFLARER2:
        const storageProviderR2 = new StorageProviderEntity({
          name: input.name,
          active: input.active,
          type: StorageProviderType.CLOUDFLARER2,
          uploads: input.uploads,
          userId: input.userId,
        });

        await this.storageProviderRepository.create(storageProviderR2);

        const storageProviderCredentialsR2 = new StorageProviderCredentialsEntity({
          storageProviderId: storageProviderR2.id,
          credentials: input.credentials as unknown as R2Credentials,
        });
        await this.storageProviderCredentialsRepository.insert(storageProviderCredentialsR2);
        break;

      case StorageProviderType.S3:
        const storageProviderS3 = new StorageProviderEntity({
          name: input.name,
          active: input.active,
          type: StorageProviderType.S3,
          uploads: input.uploads,
          userId: input.userId,
        });

        await this.storageProviderRepository.create(storageProviderS3);

        const storageProviderCredentialsS3 = new StorageProviderCredentialsEntity({
          storageProviderId: storageProviderS3.id,
          credentials: input.credentials as unknown as S3Credentials,
        });
        await this.storageProviderCredentialsRepository.insert(storageProviderCredentialsS3);
        break;

      default:
        throw new BadRequestException("Invalid storage provider type");
    }
  }
}
