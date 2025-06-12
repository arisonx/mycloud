import { CloudProviderType } from "../enums/cloud-provider.enum";

export interface ICloudProviderConfig {
  type: CloudProviderType;
  bucketName: string;
  accessKey: string;
  secretKey: string;
  endpoint: string;
}

export abstract class ICloudProvider {
  abstract uploadFile(fileKey: string, file: Buffer): Promise<void>;
  abstract getDownloadUrl(fileKey: string): Promise<string>;
  abstract getDeleteUrl(fileKey: string): Promise<string>;
  abstract getPresignedUrl(fileKey: string): Promise<string>;
  abstract connect(config: ICloudProviderConfig): Promise<void>;
}
