import { ClassValidatorFields } from "@/shared/domain/validators/class-validator-fields";
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserProps } from "../entities/user.entity";

export class UserRules {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsBoolean()
  @IsOptional()
  active: boolean;

  constructor({ name, password, email, active }: UserProps) {
    Object.assign(this, {
      email,
      name,
      password,
      active,
    });
  }
}

class UserValidator extends ClassValidatorFields<UserRules> {
  validate(data: UserRules): boolean {
    return super.validate(data);
  }
}

export class UserValidatorFactory {
  static create(): UserValidator {
    return new UserValidator();
  }
}
