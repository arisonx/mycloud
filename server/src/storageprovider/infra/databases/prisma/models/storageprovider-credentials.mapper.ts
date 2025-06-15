import { StorageProviderCredentialsEntity } from "@/storageprovider/domain/entities/storageprovider-credentials.entity";
import { StorageProviderCredentials } from "generated/prisma";
import { StorageProviderCredentials as DomainCredentials } from "@/storageprovider/domain/types/storage-credentials.type";
import { JsonValue } from "generated/prisma/runtime/library";

export class StorageProviderCredentialsModelMapper {
  public static toEntity(model: StorageProviderCredentials): StorageProviderCredentialsEntity {
    return new StorageProviderCredentialsEntity(
      {
        storageProviderId: model.storageProviderId,
        credentials: model.credentials as unknown as DomainCredentials,
      },
      model.id
    );
  }

  public static toPersistence(entity: StorageProviderCredentialsEntity): StorageProviderCredentials {
    const entityData = entity.toJSON();

    return {
      id: entityData.id,
      storageProviderId: entityData.storageProviderId,
      credentials: entityData.credentials as unknown as JsonValue,
    };
  }
}
