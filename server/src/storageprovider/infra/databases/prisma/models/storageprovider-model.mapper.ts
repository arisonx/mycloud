import { StorageProviderEntity } from "@/storageprovider/domain/entities/storageprovider.entity";
import { StorageProvider, StorageProviderType } from "generated/prisma";
import { StorageProviderType as StorageProviderTypeEnum } from "@/storageprovider/domain/enums/StorageProviderType.enum";

export class  StorageProviderModelMapper {
  public static toEntity(model: StorageProvider) {
    const data: StorageProvider = {
      active: model.active,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
      name: model.name,
      type: model.type,
      userId: model.userId,
      id: model.id,
    };

    return new StorageProviderEntity(
      {
        active: data.active,
        name: data.name,
        userId: data.userId,
        type: data.type as unknown as StorageProviderTypeEnum,
        uploads: [],
      },
      data.id,
      data.createdAt,
      data.updatedAt
    );
  }

  public static toPersistence(entity: StorageProviderEntity) {
    const entityData = entity.toJSON();

    const output: StorageProvider = {
      id: entityData.id,
      name: entityData.name,
      type: entityData.type as unknown as StorageProviderType,
      userId: entityData.userId,
      active: entityData.active,
      createdAt: entityData.createdAt,
      updatedAt: entityData.updatedAt,
    };

    return output;
  }
}
