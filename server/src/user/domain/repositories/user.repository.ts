import { User } from "../user.entity";

export abstract class IUserRepository {
    abstract create(user: User): Promise<User>;
    abstract findAll(): Promise<User[]>;
    abstract findById(id: string): Promise<User>;
}