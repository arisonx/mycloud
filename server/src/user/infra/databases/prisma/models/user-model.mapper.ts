import { UserEntity } from "@/user/domain/entity/user.entity";
import { User } from "generated/prisma";

export class UserModelMapper {
  public static toEntity(model: User) {
    const data: User = {
      id: model.id,
      name: model.name,
      email: model.email,
      password: model.password,
      active: model.active,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    };

    return new UserEntity(
      {
        active: data.active,
        email: data.email,
        name: data.name,
        password: data.password,
      },
      data.id,
      data.createdAt,
      data.updatedAt
    );
  }

  public static toPersistence(entity: UserEntity) {
    const entityData = entity.toJSON();

    const output: User = {
      id: entityData.id,
      name: entityData.name,
      email: entityData.email,
      password: entityData.password,
      active: entityData.active,
      createdAt: entityData.createdAt,
      updatedAt: entityData.updatedAt,
    };

    return output;
  }
}
