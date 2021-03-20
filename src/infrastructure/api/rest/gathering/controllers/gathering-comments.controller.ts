import { SWAGGER_TAG_GATHERING_COMMENT } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCommentDTO } from '../models/dto/create-comment.dto';
import { UpdateCommentDTO } from '../models/dto/update-comment.dto';
import { CommentRes } from '../models/res/comment.res';

@ApiTags(SWAGGER_TAG_GATHERING_COMMENT.tag)
@Controller('/gatherings/:gatheringId/comments')
export class GatheringCommentController {
  @ApiOperation({ summary: '댓글 등록' })
  @ApiCreatedResponse({ description: '성공', type: Object })
  @ApiBody({ type: CreateCommentDTO })
  @Post()
  async createComment(@Param('gatheringId') gatheringId: number, @Body() createCommentDto: CreateCommentDTO) {
    return;
  }

  @ApiOperation({ summary: '댓글 모두 조회' })
  @ApiOkResponse({ description: '성공', isArray: true, type: CommentRes })
  @Get()
  async getComments(@Param('gatheringId') gatheringId: number): Promise<CommentRes[]> {
    return;
  }

  @ApiOperation({ summary: '댓글 수정' })
  @ApiOkResponse({ description: '성공', type: Object })
  @ApiBody({ type: UpdateCommentDTO })
  @Put(':commentId')
  async updateCommentById(
    @Param('gatheringId') gatheringId: number,
    @Param('commentId') commentId: number,
    @Body() updateCommentDto: UpdateCommentDTO,
  ) {
    return;
  }

  @ApiOperation({ summary: '댓글 삭제' })
  @ApiOkResponse({ description: '성공', type: Object })
  @Delete(':commentId')
  async removeCommentById(@Param('gatheringId') gatheringId: number, @Param('commentId') commentId: number) {
    return;
  }

  @ApiOperation({ summary: '댓글 신고' })
  @ApiCreatedResponse({ description: '성공', type: Object })
  @Post(':commentId/report')
  async reportComment(@Param('gatheringId') gatheringId: number, @Param('commentId') commentId: number) {
    return;
  }
}
