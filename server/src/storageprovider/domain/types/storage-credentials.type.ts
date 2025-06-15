import { StorageProviderType } from "../enums/StorageProviderType.enum";

/**
 * @description Credentials for AWS S3.
 * Requires bucket name, access key, secret key, and region.
 */
export interface S3Credentials {
  type: StorageProviderType.S3;
  bucketName: string;
  accessKey: string;
  secretKey: string;
  region: string;
}

/**
 * @description Credentials for Cloudflare R2.
 * Requires bucket name, access key, secret key, account ID and endpoint.
 */
export interface R2Credentials {
  type: StorageProviderType.CLOUDFLARER2;
  bucketName: string;
  accessKey: string;
  secretKey: string;
  accountId: string;
  endpoint: string;
}

// Add other provider credential types here, e.g., AzureBlobCredentials

/**
 * @description A discriminated union of all possible storage provider credentials.
 * The 'type' property is used to discriminate between the different credential types.
 */
export type StorageProviderCredentials = S3Credentials | R2Credentials;
