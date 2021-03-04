import { Comment } from '../entity/Comment';
import { ReComment } from '../entity/ReComment';

/**
 * todo: 댓글 신고
 */
export interface ICommentRepository {
  createComment(comment: Comment): Promise<Comment>;
  updateComment(comment: Comment): Promise<Comment>;
  removeCommentByCommentId(commentId: number): Promise<any>;
  getReCommentsByCommentId(commentId: number): Promise<ReComment[]>;
}
