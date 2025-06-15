import { Entity } from "@/shared/domain/entities/entity";
import { EntityValidationError } from "@/shared/domain/errors/validation-error";
import { StorageProviderType } from "../enums/StorageProviderType.enum";
import { StorageProviderRules } from "../validators/storageprovider.validator";
import { StorageProviderValidatorFactory } from "../validators/storageprovider.validator";
import { StorageProviderCredentials } from "../types/storage-credentials.type";

export type StorageProviderProps = {
  name: string;
  active: boolean;
  type: StorageProviderType;
  uploads: [];
  userId: string;
  credentials?: StorageProviderCredentials;
};

export class StorageProviderEntity extends Entity<StorageProviderProps> {
  constructor(
    public readonly props: StorageProviderProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    StorageProviderEntity.validate(props);
    super(props, id, createdAt, updatedAt);
  }

  private static validate(props: StorageProviderProps): void {
    const validator = StorageProviderValidatorFactory.create();
    const isValid = validator.validate(new StorageProviderRules(props));
    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
  }
}
