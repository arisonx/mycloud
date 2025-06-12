export interface ICacheProvider {
  set(key: string, value: any, ttl?: number): Promise<void>;
  get(key: string): Promise<any>;
  delete(key: string): Promise<void>;
  set_object(key: string, value: any, ttl?: number): Promise<any>;
  get_object(key: string): Promise<any>;
  delete_object(key: string): Promise<void>;
  clear(): Promise<void>;
  isExpired(key: string): Promise<boolean>;
}


export const ICacheProvider = Symbol("ICacheProvider");
