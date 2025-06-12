import { Injectable } from '@nestjs/common';
import { EnvConfig } from './env-config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private configService: ConfigService) {}

  getAppPort(): number {
    return Number(this.configService.get<number>('PORT')) as number;
  }

  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV') as string; 
  }

  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET') as string;
  }

  getJwtExpiresInSeconds(): number {
    return Number(this.configService.get<number>('JWT_EXPIRES_IN')) ;
  }

  getDatabaseUrl(): string {
    return this.configService.get<string>('DATABASE_URL') as string;
  }

  getEmailHost(): string {
    return this.configService.get<string>('EMAIL_HOST') as string;
  }

  getEmailPort(): number {
    return Number(this.configService.get<number>('EMAIL_PORT')) as number;
  }

  getEmailFromName(): string {
    return this.configService.get<string>('EMAIL_FROM_NAME') as string;
  }

  getEmailFromAddress(): string {
    return this.configService.get<string>('EMAIL_FROM_ADDRESS') as string;
  }

  getCloudflareBucketName(): string {
    return this.configService.get<string>('CLOUDFLARE_BUCKET_NAME') as string;
  }

  getCloudflareR2Endpoint(): string {
    return this.configService.get<string>('CLOUDFLARE_R2_ENDPOINT') as string;
  }

  getCloudflareR2AccessKey(): string {
    return this.configService.get<string>('CLOUDFLARE_R2_ACCESS_KEY') as string;
  }

  getCloudflareR2SecretKey(): string {
    return this.configService.get<string>('CLOUDFLARE_R2_SECRET_KEY') as string;
  }
}
