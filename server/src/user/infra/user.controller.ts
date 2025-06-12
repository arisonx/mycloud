import { Controller, Get } from "@nestjs/common";
import { User } from "../domain/user.entity";

@Controller("users")
export class UserController {
  @Get()
  async findAll(): Promise<User[]> {
    return [];
  }
}
