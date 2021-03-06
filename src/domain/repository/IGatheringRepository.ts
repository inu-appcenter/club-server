import { Gathering } from '../entity/Gathering';

export interface IGatheringRepository {
  /**
   * 소모임 모두 조회
   * @param isClosed 모집 여부
   * @description 모집 중 또는 마감한 소모임 모두 조회
   */
  getGatherings(isClosed: boolean): Promise<Gathering[]>;

  /**
   * 내 소모임 모두 조회
   * @description 내가 참여한 소모임 모두 조회
   */
  getMyGatherings(userId: number): Promise<Gathering[]>;

  /**
   * 내 소모임에서 상세 조회
   * @description 내가 참여한 소모임에서 상세 조회
   */
  getMyGatheringById(userId: number, gatheringId: number): Promise<Gathering>;

  /**
   * 내가 작성한 소모임들 조회
   * @description 내가 작성한 소모임들 조회
   */
  getPostedGatheringsByUserId(userId: number): Promise<Gathering[]>;

  /**
   * 소모임 상세 조회
   * @description 소모임 상세 조회
   */
  getGatheringById(gatheringId: number): Promise<Gathering>;

  /**
   * 소모임 생성
   * @param gathering 소모임 엔티티
   * @description 소모임 생성
   * @permission 사용자
   */
  createGathering(gathering: Gathering): Promise<Gathering>;

  /**
   * 소모임 수정
   * @param gathering 소모임 엔티티
   * @description 소모임 수정
   * @permission 사용자
   */
  updateGathering(gathering: Gathering): Promise<void>;

  /**
   * 소모임 삭제
   * @param gatheringId 소모임 pk
   * @description 소모임 삭제
   * @permission 슈퍼관리자, 사용자
   */
  deleteGatheringById(gatheringId: number): Promise<any>;

  /**
   * 소모임 강제 마감
   * @param gatheringId 소모임 pk
   * @description 모집 중인 특정 소모임을 강제 마감
   * @permission 사용자
   */
  closeGatheringById(gatheringId: number): Promise<any>;

  /**
   * 소모임 신고
   * @param gatheringId 소모임 pk
   * @description 소모임 신고
   * @permission 사용자
   */
  reportGatheringById(gatheringId: number): Promise<void>;

  participateInGathering(gatheringId: number, userId: number): Promise<void>;
  quitGathering(gatheringId: number, userId: number): Promise<void>;
}
