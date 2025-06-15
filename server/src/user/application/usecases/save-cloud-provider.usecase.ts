import { UseCase } from "@/shared/application/usecases/use-case";
import { StorageProviderType } from "@/storageprovider/domain/enums/StorageProviderType.enum";
import { UserEntity } from "@/user/domain/entity/user.entity";
import { IUserRepository } from "@/user/domain/repositories/user.repository";
import { Injectable } from "@nestjs/common";

type Input = {
  name: string;
  password: string;
  email: string;
  active: boolean;
  type: StorageProviderType;
};

type Output = {
  id: string;
};

@Injectable()
export class SaveCloudProviderUsecase implements UseCase<Input, Output> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(input: Input): Promise<Output> {
    
  }
}
