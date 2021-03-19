import { SWAGGER_TAG_UPLOAD_IMAGE } from '@/common/swagger/SwaggerTags';
import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiFile } from '../../custom-swagger/api-file.decorator';
import { ApiMultiFile } from '../../custom-swagger/api-multi-file.decorator';

@ApiTags(SWAGGER_TAG_UPLOAD_IMAGE.tag)
@Controller('uploads/images')
export class UploadTestController {
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

  @ApiOperation({ description: '파일 업로드 테스트입니당' })
  @ApiCreatedResponse({ description: '업로드 성공' })
  @ApiConsumes('multipart/form-data')
  @ApiFile('image')
  @Post('single')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() file) {
    console.log(file);
    return;
  }
}
