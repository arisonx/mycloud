import { S3Client } from "@aws-sdk/client-s3";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AwsS3CloudProvider {
    constructor(private readonly s3: S3Client) {}
}

