import { ClassValidatorFields } from "@/shared/domain/validators/class-validator-fields";
import { StorageProviderCredentials } from "../types/storage-credentials.type";
import { IsObject } from "class-validator";
import { IsNotEmpty } from "class-validator";
import { IsString } from "class-validator";
import { StorageProviderCredentialsProps } from "../entities/storageprovider-credentials.entity";

export class StorageProviderCredentialsRules {
  @IsString()
  @IsNotEmpty()
  storageProviderId: string;

  @IsObject()
  @IsNotEmpty()
  credentials: StorageProviderCredentials;

  constructor({ storageProviderId, credentials }: StorageProviderCredentialsProps) {
    Object.assign(this, {
      storageProviderId,
      credentials,
    });
  }
}

class StorageProviderCredentialsValidator extends ClassValidatorFields<StorageProviderCredentialsRules> {
  validate(data: StorageProviderCredentialsRules): boolean {
    return super.validate(data);
  }
}

export class StorageProviderCredentialsValidatorFactory {
  static create(): StorageProviderCredentialsValidator {
    return new StorageProviderCredentialsValidator();
  }
}
