import { UseCase } from "@/shared/application/usecases/use-case";
import { IUserRepository } from "@/user/domain/repositories/user.repository";
import { Injectable } from "@nestjs/common";

type Input = {
  name: string;
  email: string;
  password: string;
  id: string;
};

type Output = {
  id: string;
};

@Injectable()
export class SignupUsecase implements UseCase<Input, Output> {
  constructor(private readonly userRepository: IUserRepository) {}

  //TODO: Implementar a lógica do usecase
  async execute(input: Input): Promise<Output> {}
}
