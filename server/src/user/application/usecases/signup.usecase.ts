import { UseCase } from "@/shared/application/usecases/use-case";
import { IUserRepository } from "@/user/domain/repositories/user.repository";
import { Injectable, HttpStatus } from "@nestjs/common";
import { UserEntity } from "@/user/domain/entity/user.entity";
import { HttpExceptionError } from "@/shared/infra/exception-filters/http-exception-error/http-exception-error";
import { IHashProvider } from "@/shared/application/providers/hash-provider";

type Input = {
  name: string;
  email: string;
  password: string;
};

type Output = {
  id: string;
};

@Injectable()
export class SignupUsecase implements UseCase<Input, Output> {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly hashProvider: IHashProvider
  ) {}

  async execute(input: Input): Promise<Output> {
    const userExists = await this.userRepository.findByEmail(input.email);

    if (userExists) {
      throw new HttpExceptionError("User already exists", HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await this.hashProvider.generateHash(input.password);

    const entity = new UserEntity({
      name: input.name,
      email: input.email,
      password: hashedPassword,
      active: true,
    });

    const { _id } = await this.userRepository.create(entity);

    return {
      id: _id,
    };
  }
}
