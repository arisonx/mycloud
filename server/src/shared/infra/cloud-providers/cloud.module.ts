import { Module } from "@nestjs/common";
import { CloudflareR2CloudProvider } from "./cloudflare/clouflare-r2.cloudprovider";

@Module({
  imports: [],
  controllers: [],
  providers: [CloudflareR2CloudProvider],
})
export class CloudModule {}
