import { UseCase } from "@/shared/application/usecases/use-case";

type Input = {
  name: string;
  path: string;
  type: string;
  size: number;
};

type Output = {
  id: string;
};

export class UploadUsecase implements UseCase<Input, Output> {
  execute(input: Input): Promise<Output> {
    return Promise.resolve({
      id: "1",
    });
  }
}
