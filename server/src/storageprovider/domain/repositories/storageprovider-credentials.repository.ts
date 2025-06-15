import { RepositoryInterface } from "@/shared/domain/repositories/repository-contracts";
import { StorageProviderCredentialsEntity } from "@/storageprovider/domain/entities/storageprovider-credentials.entity";

export abstract class IStorageProviderCredentialsRepository
  implements RepositoryInterface<StorageProviderCredentialsEntity>
{
  abstract findById(id: string): Promise<StorageProviderCredentialsEntity | null>;
  abstract findAll(): Promise<StorageProviderCredentialsEntity[]>;
  abstract update(storageProviderCredentials: StorageProviderCredentialsEntity): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract insert(entity: StorageProviderCredentialsEntity): Promise<void>;
}
