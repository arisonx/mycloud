export interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  compareHash(payload: string, hash: string): Promise<boolean>;
}

export const IHashProvider = Symbol("IHashProvider");