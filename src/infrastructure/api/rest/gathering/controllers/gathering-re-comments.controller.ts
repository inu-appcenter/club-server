import { SWAGGER_TAG_GATHERING_RECOMMENT } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateReCommentDTO } from '../models/dto/create-recomment.dto';
import { UpdateReCommentDTO } from '../models/dto/update-recomment.dto';
import { ReCommentRes } from '../models/res/re-comment.res';

@ApiTags(SWAGGER_TAG_GATHERING_RECOMMENT.tag)
@Controller('/gatherings/:gatheringId/comments/:commentId/recomments')
export class GatheringReCommentController {
  @ApiOperation({ summary: '대댓글 등록' })
  @ApiCreatedResponse({ description: '성공', type: Object })
  @ApiBody({ type: CreateReCommentDTO })
  @Post()
  createComment(
    @Param('gatheringId') gatheringId: number,
    @Param('commentId') commentId: number,
    @Body() createReCommentDto: CreateReCommentDTO,
  ) {
    return;
  }

  @ApiOperation({ summary: '대댓글 모두 조회' })
  @ApiOkResponse({ description: '성공', isArray: true, type: ReCommentRes })
  @Get()
  async getComments(@Param('gatheringId') gatheringId: number): Promise<ReCommentRes[]> {
    return;
  }

  @ApiOperation({ summary: '대댓글 수정' })
  @ApiOkResponse({ description: '성공', type: Object })
  @ApiBody({ type: UpdateReCommentDTO })
  @Put(':reCommentId')
  updateCommentById(
    @Param('gatheringId') gatheringId: number,
    @Param('commentId') commentId: number,
    @Param('reCommentId') reCommentId: number,
    @Body() updateReCommentDto: UpdateReCommentDTO,
  ) {
    return;
  }

  @ApiOperation({ summary: '대댓글 삭제' })
  @ApiOkResponse({ description: '성공', type: Object })
  @Delete(':reCommentId')
  removeCommentById(
    @Param('gatheringId') gatheringId: number,
    @Param('commentId') commentId: number,
    @Param('reCommentId') reCommentId: number,
  ) {
    return;
  }

  @ApiOperation({ summary: '대댓글 신고' })
  @ApiOkResponse({ description: '성공', type: Object })
  @Post(':reCommentId/report')
  reportComment(
    @Param('gatheringId') gatheringId: number,
    @Param('commentId') commentId: number,
    @Param('reCommentId') reCommentId: number,
  ) {
    return;
  }
}
