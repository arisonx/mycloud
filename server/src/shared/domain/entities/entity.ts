import { v4 as uuidv4 } from "uuid";

export abstract class Entity<Props = any> {
  public readonly _id: string;
  public readonly props: Props;
  public readonly _createdAt: Date;
  public readonly _updatedAt: Date;

  constructor(props: Props, id?: string, createdAt?: Date, updatedAt?: Date) {
    this.props = props;
    this._id = id || uuidv4();
    this._createdAt = createdAt || new Date();
    this._updatedAt = updatedAt || new Date();
  }

  public get id() {
    return this._id;
  }

  public get createdAt() {
    return this._createdAt;
  }

  public get updatedAt() {
    return this._updatedAt;  
  }

  toJSON(): Required<{ id: string, createdAt: Date, updatedAt: Date } & Props> {
    return {
      id: this._id,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      ...this.props,
    } as Required<{ id: string, createdAt: Date, updatedAt: Date } & Props>;
  }
}
