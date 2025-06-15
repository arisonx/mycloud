import { Controller, Post, Body } from "@nestjs/common";

@Controller("storage-provider")
export class StorageProviderController {
  @Post()
  async save(@Body() body: any) {


    
  }

}
