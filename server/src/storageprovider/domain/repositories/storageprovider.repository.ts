import { RepositoryInterface } from "@/shared/domain/repositories/repository-contracts";
import { StorageProviderEntity } from "../entities/storageprovider.entity";

export abstract class IStorageProviderRepository implements RepositoryInterface<StorageProviderEntity> {
  abstract create(entity: StorageProviderEntity): Promise<void>;
  abstract findById(id: string): Promise<StorageProviderEntity | null>;
  abstract findAll(): Promise<StorageProviderEntity[]>;
  abstract update(entity: StorageProviderEntity): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract insert(entity: StorageProviderEntity): Promise<void>;
  abstract findByName(name: string): Promise<StorageProviderEntity | null>;
}
