import { Injectable } from "@nestjs/common";
import { IStorageProviderCredentialsRepository } from "@/storageprovider/domain/repositories/storageprovider-credentials.repository";
import { PrismaService } from "@/shared/infra/database/prisma/prisma.service";
import { StorageProviderCredentialsEntity } from "@/storageprovider/domain/entities/storageprovider-credentials.entity";
import { StorageProviderCredentialsModelMapper } from "../models/storageprovider-credentials.mapper";

@Injectable()
export class PrismaStorageProviderCredentialsRepository implements IStorageProviderCredentialsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<StorageProviderCredentialsEntity | null> {
    const storageProviderCredentials = await this.prisma.storageProviderCredentials.findUnique({ where: { id } });
    return storageProviderCredentials
      ? StorageProviderCredentialsModelMapper.toEntity(storageProviderCredentials)
      : null;
  }

  async findAll(): Promise<StorageProviderCredentialsEntity[]> {
    const storageProviderCredentials = await this.prisma.storageProviderCredentials.findMany();
    return storageProviderCredentials.map(StorageProviderCredentialsModelMapper.toEntity);
  }

  async update(entity: StorageProviderCredentialsEntity): Promise<void> {
    const data = StorageProviderCredentialsModelMapper.toPersistence(entity);
    await this.prisma.storageProviderCredentials.update({
      where: { id: entity.id },
      data: {
        credentials: data.credentials as any,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.storageProviderCredentials.delete({ where: { id } });
  }

  async insert(entity: StorageProviderCredentialsEntity): Promise<void> {
    const data = StorageProviderCredentialsModelMapper.toPersistence(entity);
    await this.prisma.storageProviderCredentials.create({
      data: {
        credentials: data.credentials as any,
        storageProviderId: data.storageProviderId,
      },
    });
  }
}
