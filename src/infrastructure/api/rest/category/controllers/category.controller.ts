import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SWAGGER_TAG_CATEGORY } from '@/common/swagger/SwaggerTags';
import { CategoryService } from '../services/category.service';
import { CategoryDTO } from '../models/dto/category.dto';
import { CategoryRes } from '../../club/models/res/club.res';

@ApiTags(SWAGGER_TAG_CATEGORY.tag)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({ description: '카테고리 모두 조회' })
  @ApiOkResponse({ description: '성공', isArray: true, type: CategoryRes })
  @Get()
  async getCategories(): Promise<CategoryRes[]> {
    return;
  }

  @ApiOperation({ description: '카테고리 추가' })
  @ApiCreatedResponse({ description: '성공', type: Object })
  @ApiBody({ type: CategoryDTO })
  @Post()
  async appendCategory(@Body() categoryDto: CategoryDTO) {
    return;
  }

  @ApiOperation({ description: '카테고리 수정' })
  @ApiOkResponse({ description: '성공', type: Object })
  @ApiBody({ type: CategoryDTO })
  @Put(':categoryId')
  async updateCategoryById(@Body() categoryDto: CategoryDTO) {
    return;
  }
}
