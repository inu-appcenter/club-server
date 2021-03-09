import { SWAGGER_TAG_GATHERING_RECOMMENT } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateReCommentDTO } from '../dto/create.recomment.dto';
import { UpdateReCommentDTO } from '../dto/update.recomment.dto';

@ApiTags(SWAGGER_TAG_GATHERING_RECOMMENT.tag)
@Controller('/gatherings/:gatheringId/comments/:commentId/recomments')
export class GatheringReCommentController {
  @ApiOperation({ summary: '대댓글 등록' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiBody({ type: CreateReCommentDTO })
  @Post()
  createComment(@Body(ValidationPipe) createReCommentDto: CreateReCommentDTO) {
    return;
  }

  @ApiOperation({ summary: '대댓글 수정' })
  @ApiOkResponse({ description: '성공' })
  @ApiBody({ type: UpdateReCommentDTO })
  @Put(':reCommentId')
  updateCommentById(@Body(ValidationPipe) updateReCommentDto: UpdateReCommentDTO) {
    return;
  }

  @ApiOperation({ summary: '댓글 삭제' })
  @ApiOkResponse({ description: '성공' })
  @Delete(':reCommentId')
  removeCommentById() {
    return;
  }

  @ApiOperation({ summary: '댓글 신고' })
  @ApiOkResponse({ description: '성공' })
  @Post(':reCommentId/report')
  reportComment() {
    return;
  }
}
