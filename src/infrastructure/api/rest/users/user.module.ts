import { UserServiceModule } from '@/infrastructure/di/injections/user.services.module';
import { Module } from '@nestjs/common';
import { UsersController } from './controllers/user.controller';
import { UsersService } from './services/user.service';

@Module({
  imports: [UserServiceModule.register()],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
