import { SWAGGER_TAG_GATHERING_COMMENT } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Get, Patch, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCommentDTO } from '../dto/create.comment.dto';
import { UpdateCommentDTO } from '../dto/update.comment.dto';

@ApiTags(SWAGGER_TAG_GATHERING_COMMENT.tag)
@Controller('/gatherings/:gatheringId/comments')
export class GatheringCommentController {
  @ApiOperation({ summary: '댓글 등록' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiBody({ type: CreateCommentDTO })
  @Post()
  createComment(@Body(ValidationPipe) createCommentDto: CreateCommentDTO) {
    return;
  }

  @ApiOperation({ summary: '댓글 수정' })
  @ApiOkResponse({ description: '성공' })
  @ApiBody({ type: UpdateCommentDTO })
  @Put(':commentId')
  updateCommentById(@Body(ValidationPipe) updateCommentDto: UpdateCommentDTO) {
    return;
  }

  @ApiOperation({ summary: '댓글 삭제' })
  @ApiOkResponse({ description: '성공' })
  @Delete(':commentId')
  removeCommentById() {
    return;
  }

  @ApiOperation({ summary: '댓글 신고' })
  @ApiCreatedResponse({ description: '성공' })
  @Post(':commentId/report')
  reportComment() {
    return;
  }
}
