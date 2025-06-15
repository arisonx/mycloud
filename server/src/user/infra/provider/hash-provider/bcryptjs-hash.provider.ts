import { IHashProvider } from "@/shared/application/providers/hash-provider";
import { Injectable } from "@nestjs/common";
import { compare, hash } from "bcryptjs";

@Injectable()
export class BcryptjsHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 6);
  }

  public async compareHash(payload: string, hash: string): Promise<boolean> {
    return compare(payload, hash);
  }
}
