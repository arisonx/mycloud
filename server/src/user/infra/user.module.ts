import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { SignupUsecase } from '../application/usecases/signup.usecase';

@Module({
  controllers: [UserController],
  providers: [SignupUsecase],
})
export class UserModule {}
