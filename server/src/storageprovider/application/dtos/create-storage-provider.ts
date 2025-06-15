export interface CreateStorageProviderDto {
  name: string;
  active: boolean;
  type: string;
  uploads: [];
  userId: string;
  credentials: {
    type: string;
    [key: string]: any;
  };
}
