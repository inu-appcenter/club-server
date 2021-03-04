import { ReComment } from '../entity/ReComment';

/**
 * todo: 대댓글 신고
 */
export interface IReCommentRepository {
  createReComment(reComment: ReComment): Promise<ReComment>;
  updateReComment(reComment: ReComment): Promise<ReComment>;
  removeReCommentById(reCommentId: number): Promise<any>;
}
