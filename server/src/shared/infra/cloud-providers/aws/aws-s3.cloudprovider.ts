import { Injectable } from "@nestjs/common";
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import * as path from "path";
import { lookup } from "mime-types";
import { ICloudProvider, ICloudProviderConfig } from "@/shared/application/providers/cloud-provider";

@Injectable()
export class AwsS3CloudProvider implements ICloudProvider {
  private s3: S3Client;
  private bucketName: string;

  async connect(config: ICloudProviderConfig): Promise<void> {
    this.bucketName = config.bucketName;
    this.s3 = new S3Client({
      endpoint: config.endpoint,
      credentials: {
        accessKeyId: config.accessKey,
        secretAccessKey: config.secretKey,
      },
      region: "auto",
    });
  }

  async uploadFile(fileKey: string, file: Buffer): Promise<void> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
      Body: file,
    });
    await this.s3.send(command);
  }

  /**
   * Gerar uma URL pré-assinada para upload de uma imagem
   */
  async getUploadUrl(fileKey: string): Promise<string> {
    const fileExt = path.extname(fileKey);
    const fileName = fileKey.replace(fileExt, "").toLowerCase().split(" ").join("-") + Date.now() + fileExt;
    const contentType = lookup(fileExt) || "application/octet-stream";

    // Gera o PutObjectCommand para o arquivo
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: fileName,
      ContentType: contentType,
    });

    // Gera e retorna a URL pré-assinada
    return await getSignedUrl(this.s3, command, { expiresIn: 3600 });
  }

  /**
   * Gerar uma URL pré-assinada para download de uma imagem
   */
  async getDownloadUrl(fileKey: string): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
    });

    return await getSignedUrl(this.s3, command, { expiresIn: 3600 });
  }

  /**
   * Gerar uma URL pré-assinada para deletar uma imagem
   */
  async getDeleteUrl(fileKey: string): Promise<string> {
    const command = new DeleteObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
    });

    return await getSignedUrl(this.s3, command);
  }

  async getPresignedUrl(fileKey: string): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
    });

    return await getSignedUrl(this.s3, command);
  }
}
