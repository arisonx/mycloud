import { UserEntity } from "@/user/domain/entity/user.entity";
import { IUserRepository } from "@/user/domain/repositories/user.repository";
import { PrismaService } from "@/shared/infra/database/prisma/prisma.service";
import { UserModelMapper } from "../models/user-model.mapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return user ? UserModelMapper.toEntity(user) : null;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany();
    return users.map(user => UserModelMapper.toEntity(user));
  }

  async findById(id: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user ? UserModelMapper.toEntity(user) : null;
  }

  async insert(entity: UserEntity): Promise<void> {
    const data = UserModelMapper.toPersistence(entity);
    await this.prisma.user.create({
      data,
    });
  }

  async update(entity: UserEntity): Promise<void> {
    const data = UserModelMapper.toPersistence(entity);
    await this.prisma.user.update({
      where: { id: entity.id },
      data: data,
    });
  }
  async create(user: UserEntity): Promise<UserEntity> {
    const data = UserModelMapper.toPersistence(user);
    const createdUser = await this.prisma.user.create({
      data,
    });
    return UserModelMapper.toEntity(createdUser);
  }
}
