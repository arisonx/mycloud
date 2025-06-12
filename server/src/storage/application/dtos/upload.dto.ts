import { CloudProviderType } from "@/shared/application/enums/cloud-provider.enum";

export type UploadDto = {
  name: string;
  path: string;
  type: string;
  size: number;
  file: File;
  cloudProvider: CloudProviderType;
};
