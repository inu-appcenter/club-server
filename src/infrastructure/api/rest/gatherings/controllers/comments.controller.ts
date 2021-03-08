import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Comment')
@Controller('/gatherings/:gatheringId/comments')
export class CommentsController {
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
