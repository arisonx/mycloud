import { UserEntity } from "../entity/user.entity";
import { RepositoryInterface } from "@/shared/domain/repositories/repository-contracts";

export abstract class IUserRepository implements RepositoryInterface<UserEntity> {
  abstract create(user: UserEntity): Promise<UserEntity>;
  abstract findAll(): Promise<UserEntity[]>;
  abstract findById(id: string): Promise<UserEntity | null>;
  abstract update(user: UserEntity): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract insert(user: UserEntity): Promise<void>;
  abstract findByEmail(email: string): Promise<UserEntity | null>;
}
