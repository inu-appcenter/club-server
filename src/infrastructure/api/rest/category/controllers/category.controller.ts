import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SWAGGER_TAG_CATEGORY } from '@/common/swagger/SwaggerTags';
import { CategoryService } from '../services/category.service';
import { CategoryDTO } from '../models/dto/category.dto';
import { CategoryRes } from '../../club/models/res/club.res';

@ApiTags(SWAGGER_TAG_CATEGORY.tag)
@ApiInternalServerErrorResponse({ description: '에러 메세지를 알려주세요!' })
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({ description: '카테고리 모두 조회' })
  @ApiOkResponse({ description: '성공', isArray: true, type: CategoryRes })
  @Get()
  async getCategories(): Promise<CategoryRes[]> {
    return await this.categoryService.getCategories();
  }

  @ApiOperation({ description: '카테고리 추가' })
  @ApiCreatedResponse({ description: '성공', type: Object })
  @ApiConflictResponse({ description: '카테고리 이름 중복' })
  @ApiBadRequestResponse({ description: '요청이 잘못됨' })
  @ApiBody({ type: CategoryDTO })
  @Post()
  async appendCategory(@Body() categoryDto: CategoryDTO) {
    return await this.categoryService.appendCategory(categoryDto);
  }

  @ApiOperation({ description: '카테고리 수정' })
  @ApiOkResponse({ description: '성공', type: Object })
  @ApiConflictResponse({ description: '카테고리 이름 중복' })
  @ApiBadRequestResponse({ description: '요청이 잘못됨' })
  @ApiBody({ type: CategoryDTO })
  @Put(':categoryId')
  async updateCategory(@Param('categoryId') categoryId: number, @Body() categoryDto: CategoryDTO) {
    await this.categoryService.updateCategory(categoryId, categoryDto);
  }
}
