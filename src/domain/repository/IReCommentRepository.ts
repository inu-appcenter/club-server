import { ReComment } from '../entity/ReComment';

export interface IReReCommentRepository {
  /**
   * 대댓글 등록
   * @param reComment 리코멘트 엔티티
   * @description 특정 소모임 댓글에 대댓글 등록
   * @permission 사용자
   */
  createReComment(reComment: ReComment): Promise<ReComment>;

  /**
   * 대댓글 모두 조회
   * @param commentId 댓글 pk
   * @description 특정 소모임의 댓글에 대댓글 모두 조회
   */
  getReCommentsByCommentId(commentId: number): Promise<ReComment[]>;

  /**
   * 대댓글 수정
   * @param reComment 리코멘트 엔티티
   * @description 대댓글 수정
   * @permission 사용자
   */
  updateReCommentById(reComment: ReComment): Promise<void>;

  /**
   * 대댓글 삭제
   * @param reCommentId 리코멘트 pk
   * @description 대댓글 삭제
   * @permission 슈퍼관리자, 사용자
   */
  removeReCommentById(reCommentId: number): Promise<void>;

  /**
   * 대댓글 신고
   * @param reCommentId 리코멘트 pk
   * @description 대댓글 신고
   * @permission 사용자
   */
  reportReCommentById(reCommentId: number): Promise<void>;
}
