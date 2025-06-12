import { StorageProps } from "../entities/storage.entity";
import { IsNotEmpty, IsNumber, IsString, IsDate, IsOptional } from "class-validator";
import { ClassValidatorFields } from "@/shared/domain/validators/class-validator-fields";

export class StorageRules {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  path: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  @IsNotEmpty()
  size: number;

  @IsDate()
  @IsOptional()
  createdAt?: Date;

  @IsDate()
  @IsOptional()
  updatedAt?: Date;

  constructor({ name, path, type, size, createdAt, updatedAt }: StorageProps) {
    Object.assign(this, {
      name,
      path,
      type,
      size,
      createdAt,
      updatedAt,
    });
  }
}

class StorageValidator extends ClassValidatorFields<StorageRules> {
  validate(data: StorageRules): boolean {
    return super.validate(data);
  }
}

export class StorageValidatorFactory {
  static create(): StorageValidator {
    return new StorageValidator();
  }
}
