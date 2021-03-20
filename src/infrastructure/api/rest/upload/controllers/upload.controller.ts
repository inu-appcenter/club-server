import { SWAGGER_TAG_UPLOAD_IMAGE } from '@/common/swagger/SwaggerTags';
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiFile } from '../../../custom-swagger/api-file.decorator';
import { ApiMultiFile } from '../../../custom-swagger/api-multi-file.decorator';
import { UploadRes } from '../models/res/upload.res';
import { UploadService } from '../services/upload.service';
import { address } from 'ip';

@ApiTags(SWAGGER_TAG_UPLOAD_IMAGE.tag)
@Controller('uploads/images')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  // @ApiOperation({ description: '파일s 업로드 테스트입니당' })
  // @ApiCreatedResponse({ description: '업로드 성공' })
  // @ApiConsumes('multipart/form-data')
  // @ApiMultiFile('images')
  // @Post('multi')
  // @UseInterceptors(FilesInterceptor('images'))
  // async uploadImages(@UploadedFiles() images) {
  //   console.log(images);
  //   return;
  // }

  @ApiOperation({ description: '이미지 파일 업로드' })
  @ApiCreatedResponse({ description: '업로드 성공', type: UploadRes })
  @ApiConsumes('multipart/form-data')
  @ApiFile('image')
  @Post('single')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() file): Promise<UploadRes> {
    return new UploadRes(await this.uploadService.uploadImage(file.filename));
  }
}
