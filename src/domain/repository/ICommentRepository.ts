import { Comment } from '../entity/Comment';

export interface ICommentRepository {
  /**
   * 댓글 등록
   * @param comment 코멘트 엔티티
   * @description 특정 소모임에 댓글 등록
   * @permission 사용자
   */
  createComment(comment: Comment): Promise<Comment>;

  /**
   * 댓글 모두 조회
   * @param gatheringId 소모임 pk
   * @description 특정 소모임의 댓글 모두 조회
   */
  getCommentsByGatheringId(gatheringId: number): Promise<Comment[]>;

  /**
   * 댓글 수정
   * @param comment 코멘트 엔티티
   * @description 댓글 수정
   * @permission 사용자
   */
  updateCommentById(comment: Comment): Promise<void>;

  /**
   * 댓글 삭제
   * @param commentId 코멘트 pk
   * @description 댓글 삭제
   * @permission 슈퍼관리자, 사용자
   */
  removeCommentById(commentId: number): Promise<void>;

  /**
   * 댓글 신고
   * @param commentId 코멘트 pk
   * @description 댓글 신고
   * @permission 사용자
   */
  reportCommentById(commentId: number): Promise<void>;
}
