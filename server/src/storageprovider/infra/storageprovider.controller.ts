import { Controller, Post, Body, Inject } from "@nestjs/common";
import { CreateStorageProviderDto } from "../application/dtos/create-storage-provider";
import { SaveStorageProviderUsecase } from "../application/usecase/save-storageprovider.usecase";
@Controller("storage-providers")
export class StorageProviderController {

  @Inject(SaveStorageProviderUsecase)
  saveStorageProviderUsecase: SaveStorageProviderUsecase;

  @Post()
  async save(@Body() body: CreateStorageProviderDto) {
    await this.saveStorageProviderUsecase.execute(body);
  }
}
