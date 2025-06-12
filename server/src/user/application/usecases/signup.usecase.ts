import { UseCase } from "@/shared/application/usecases/use-case";
import { IUserRepository } from "@/user/domain/repositories/user.repository";
import { Injectable } from "@nestjs/common";
import { UserEntity } from "@/user/domain/entity/user.entity";

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
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(input: Input): Promise<Output> {
    const userExists = await this.userRepository.findByEmail(input.email);

    if (userExists) {
      throw new Error("User already exists");
    }

    const user = new UserEntity({
      name: input.name,
      email: input.email,
      password: input.password,
      active: true,
    });

    await this.userRepository.create(user);

    return {
      id: "1",
    };
  }
}
