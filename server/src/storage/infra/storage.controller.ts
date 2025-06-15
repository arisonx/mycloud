import { Controller, Get, Query, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("storage")
export class StorageController {
  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @Get("download")
  downloadFile(@Query("url") url: string) {
    console.log(url);
  }
}
