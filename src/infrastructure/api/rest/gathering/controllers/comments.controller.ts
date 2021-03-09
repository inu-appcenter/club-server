import { SWAGGER_TAG_GATHERING_COMMENT } from '@/common/swagger/SwaggerTags';
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags(SWAGGER_TAG_GATHERING_COMMENT.tag)
@Controller('/gatherings/:gatheringId/comments')
export class GatheringCommentController {
  @ApiOperation({ summary: '댓글 등록' })
  @Post()
  createComment() {
    return;
  }

  @ApiOperation({ summary: '댓글 수정' })
  @Put(':commentId')
  updateCommentById() {
    return;
  }

  @ApiOperation({ summary: '댓글 삭제' })
  @Delete(':commentId')
  removeCommentById() {
    return;
  }

  @ApiOperation({ summary: '댓글 신고' })
  @Post(':commentId/report')
  reportComment() {
    return;
  }
}
