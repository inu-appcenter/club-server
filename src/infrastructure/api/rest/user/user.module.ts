import { UserServiceModule } from '@/infrastructure/di/injections/user.services.module';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [UserServiceModule.register()],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
