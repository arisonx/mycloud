import { Injectable } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import * as path from 'path';
import { lookup } from 'mime-types';
import { EnvConfigService } from '@/shared/infra/env-config/env-config.service';

@Injectable()
export class CloudflareR2CloudProvider {
  private readonly s3: S3Client;
  private readonly bucketName: string;

  constructor(private readonly envConfigService: EnvConfigService) {
    this.bucketName = this.envConfigService.getCloudflareBucketName();
    this.s3 = new S3Client({
      endpoint: this.envConfigService.getCloudflareR2Endpoint(),
      credentials: {
        accessKeyId: this.envConfigService.getCloudflareR2AccessKey(),
        secretAccessKey: this.envConfigService.getCloudflareR2SecretKey(),
      },
      region: 'auto',
    });
  }

  /**
   * Gerar uma URL pré-assinada para upload de uma imagem
   */
  async getUploadUrl(fileKey: string): Promise<string> {
    const fileExt = path.extname(fileKey);
    const fileName =
      fileKey.replace(fileExt, '').toLowerCase().split(' ').join('-') +
      Date.now() +
      fileExt;
    const contentType = lookup(fileExt) || 'application/octet-stream';

    // Generate the PutObjectCommand for the file
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: fileName,
      ContentType: contentType,
    });

    // Generate and return the pre-signed URL
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
}
