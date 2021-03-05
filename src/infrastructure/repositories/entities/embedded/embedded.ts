import { Column } from 'typeorm';

/**
 * typeorm 맛보기..
 *
 */
export class EmParticipationInfo {
  @Column({ name: 'openChatUrl' })
  openChatUrl: string;
}
