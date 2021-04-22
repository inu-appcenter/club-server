import { CategoryServiceModule } from '@/infrastructure/di/injections/category.services.module';
import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';

@Module({
  imports: [CategoryServiceModule.register()],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
