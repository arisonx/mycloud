import { Entity } from "@/shared/domain/entities/entity";
import { EntityValidationError } from "@/shared/domain/errors/validation-error";
import { StorageRules, StorageValidatorFactory } from "../validators/storage.validator";

export type StorageProps = {
  name: string;
  path: string;
  type: string;
  size: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export class StorageEntity extends Entity<StorageProps> {
  constructor(
    public readonly props: StorageProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    StorageEntity.validate(props);
    super(props, id, createdAt, updatedAt);
  }

  private static validate(props: StorageProps): void {
    const validator = StorageValidatorFactory.create();
    const isValid = validator.validate(new StorageRules(props));
    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
  }
}
