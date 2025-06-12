import { Entity } from "@/shared/domain/entities/entity";
import { UserRules } from "../validators/user.validators";
import { UserValidatorFactory } from "../validators/user.validators";
import { EntityValidationError } from "@/shared/domain/errors/validation-error";

export type UserProps = {
  name: string;
  password: string;
  email: string;
  active: boolean;
};

export class UserEntity extends Entity<UserProps> {
  constructor(
    public readonly props: UserProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    UserEntity.validate(props);
    super(props, id, createdAt, updatedAt);
  }

  private static validate(props: UserProps): void {
    const validator = UserValidatorFactory.create();
    const isValid = validator.validate(new UserRules(props));
    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
    console.log("OK", props);
  }
}
