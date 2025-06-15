import { Entity } from "@/shared/domain/entities/entity";
import { StorageProviderCredentials } from "@/storageprovider/domain/types/storage-credentials.type";
import { EntityValidationError } from "@/shared/domain/errors/validation-error";
import { StorageProviderCredentialsValidatorFactory } from "../validators/storage-credentials.validator";
import { StorageProviderCredentialsRules } from "../validators/storage-credentials.validator";

export type StorageProviderCredentialsProps = {
  storageProviderId: string;
  credentials: StorageProviderCredentials;
};

export class StorageProviderCredentialsEntity extends Entity<StorageProviderCredentialsProps> {
  constructor(
    public readonly props: StorageProviderCredentialsProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    StorageProviderCredentialsEntity.validate(props);
    super(props, id, createdAt, updatedAt);
  }

  get storageProviderId(): string {
    return this.props.storageProviderId;
  }

  get credentials(): StorageProviderCredentials {
    // TODO: In a real-world scenario, you might want to decrypt credentials here.
    return this.props.credentials;
  }

  private static validate(props: StorageProviderCredentialsProps): void {
    const validator = StorageProviderCredentialsValidatorFactory.create();
    const isValid = validator.validate(new StorageProviderCredentialsRules(props));
    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
  }
}
