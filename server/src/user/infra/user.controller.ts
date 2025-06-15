import { Body, Controller, Get, Inject, Post, Req } from "@nestjs/common";
import { SignupUsecase } from "../application/usecases/signup.usecase";
import { SignupDto } from "@/user/application/dtos/signup.dto";

@Controller("users")
export class UserController {
  @Inject(SignupUsecase)
  private readonly signupUsecase: SignupUsecase;

  @Post("signup")
  async signup(@Body() signupDto: SignupDto) {
    return this.signupUsecase.execute(signupDto);
  }

  @Get("save-cloud-provider")
  async saveCloudProvider(@Req() req: Request) {
    return this.saveCloudProviderUsecase.execute(req.user);
  }
}
