import { Injectable } from "@nestjs/common";

@Injectable()
export class SaveStorageProviderUsecase implements UseCase<StorageProviderEntity, StorageProviderEntity> {
  constructor(private readonly storageProviderRepository: IStorageProviderRepository) {}
}
