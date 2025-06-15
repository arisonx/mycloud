import { ClassValidatorFields } from "@/shared/domain/validators/class-validator-fields";
import { IsArray, IsEnum, IsNotEmpty, IsString, IsBoolean, IsObject, IsOptional } from "class-validator";
import { StorageProviderType } from "../enums/StorageProviderType.enum";
import { StorageProviderProps } from "../entities/storageprovider.entity";
import { StorageProviderCredentials } from "../types/storage-credentials.type";

export class StorageProviderRules {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(StorageProviderType)
  type: StorageProviderType;

  @IsArray()
  uploads: [];

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsBoolean()
  @IsNotEmpty()
  active: boolean;

  @IsObject()
  @IsOptional()
  credentials: StorageProviderCredentials;

  constructor({ name, active, type, uploads, userId }: StorageProviderProps) {
    Object.assign(this, {
      name,
      active,
      type,
      uploads,
      userId,
    });
  }
}

class StorageProviderValidator extends ClassValidatorFields<StorageProviderRules> {
  validate(data: StorageProviderRules): boolean {
    return super.validate(data);
  }
}

export class StorageProviderValidatorFactory {
  static create(): StorageProviderValidator {
    return new StorageProviderValidator();
  }
}
