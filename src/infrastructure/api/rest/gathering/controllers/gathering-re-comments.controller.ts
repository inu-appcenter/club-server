import { SWAGGER_TAG_GATHERING_RECOMMENT } from '@/common/swagger/SwaggerTags';
import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateReCommentDTO } from '../models/dto/create-recomment.dto';
import { UpdateReCommentDTO } from '../models/dto/update-recomment.dto';

@ApiTags(SWAGGER_TAG_GATHERING_RECOMMENT.tag)
@Controller('/gatherings/:gatheringId/comments/:commentId/recomments')
export class GatheringReCommentController {
  @ApiOperation({ summary: '대댓글 등록' })
  @ApiCreatedResponse({ description: '성공' })
  @ApiBody({ type: CreateReCommentDTO })
  @Post()
  createComment(
    @Param('gatheringId') gatheringId: number,
    @Param('commentId') commentId: number,
    @Body() createReCommentDto: CreateReCommentDTO,
  ) {
    return;
  }

  @ApiOperation({ summary: '대댓글 수정' })
  @ApiOkResponse({ description: '성공' })
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
  @ApiOkResponse({ description: '성공' })
  @Delete(':reCommentId')
  removeCommentById(
    @Param('gatheringId') gatheringId: number,
    @Param('commentId') commentId: number,
    @Param('reCommentId') reCommentId: number,
  ) {
    return;
  }

  @ApiOperation({ summary: '대댓글 신고' })
  @ApiOkResponse({ description: '성공' })
  @Post(':reCommentId/report')
  reportComment(
    @Param('gatheringId') gatheringId: number,
    @Param('commentId') commentId: number,
    @Param('reCommentId') reCommentId: number,
  ) {
    return;
  }
}
