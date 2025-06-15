import { Injectable } from "@nestjs/common";
import { IStorageProviderRepository } from "@/storageprovider/domain/repositories/storageprovider.repository";
import { PrismaService } from "@/shared/infra/database/prisma/prisma.service";
import { StorageProviderEntity } from "@/storageprovider/domain/entities/storageprovider.entity";
import { StorageProviderModelMapper } from "@/storageprovider/infra/databases/prisma/models/storageprovider-model.mapper";
@Injectable()
export class PrismaCloudProviderRepository implements IStorageProviderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(entity: StorageProviderEntity): Promise<void> {
    const data = StorageProviderModelMapper.toPersistence(entity);
    await this.prisma.storageProvider.create({ data });
  }

  async findById(id: string): Promise<StorageProviderEntity | null> {
    const storageProvider = await this.prisma.storageProvider.findUnique({ where: { id } });
    return storageProvider ? StorageProviderModelMapper.toEntity(storageProvider) : null;
  }

  async findAll(): Promise<StorageProviderEntity[]> {
    const storageProviders = await this.prisma.storageProvider.findMany();
    return storageProviders.map(StorageProviderModelMapper.toEntity);
  }

  async update(entity: StorageProviderEntity): Promise<void> {
    const data = StorageProviderModelMapper.toPersistence(entity);
    await this.prisma.storageProvider.update({ where: { id: entity.id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.storageProvider.delete({ where: { id } });
  }

  async insert(entity: StorageProviderEntity): Promise<void> {
    const data = StorageProviderModelMapper.toPersistence(entity);
    await this.prisma.storageProvider.create({ data });
  }
}
