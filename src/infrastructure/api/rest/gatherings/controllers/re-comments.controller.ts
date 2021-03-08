import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('ReComment')
@Controller('/gatherings/:gatheringId/comments/:commentId/recomments')
export class ReCommentsController {
  @ApiOperation({ summary: '대댓글 등록' })
  @Post()
  createComment() {
    return;
  }

  @ApiOperation({ summary: '대댓글 수정' })
  @Put(':recommentId')
  updateCommentById() {
    return;
  }

  @ApiOperation({ summary: '댓글 삭제' })
  @Delete(':recommentId')
  removeCommentById() {
    return;
  }

  @ApiOperation({ summary: '댓글 신고' })
  @Post(':recommentId/report')
  reportComment() {
    return;
  }
}
