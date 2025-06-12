import { UseCase } from "@/shared/application/usecases/use-case";
import { ICloudProvider, ICloudProviderConfig } from "@/shared/application/providers/cloud-provider";

type Input = {
  name: string;
  path: string;
  type: string;
  size: number;
  file: File;
  cloudProvider: string;
  cloudProviderConfig: ICloudProviderConfig;
};

type Output = {
  id: string;
};

export class UploadUsecase implements UseCase<Input, Output> {
  constructor(private readonly cloudProvider: ICloudProvider) {}

  execute(input: Input): Promise<Output> {
    const cloudProvider = this.cloudProvider.connect(input.cloudProviderConfig);

    return Promise.resolve({
      id: "1",
    });
  }
}
