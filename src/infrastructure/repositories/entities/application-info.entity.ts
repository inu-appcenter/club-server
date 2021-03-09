import { Column, Entity as OrmEntity } from 'typeorm';
import { CommonTypeOrm } from './common/common';

@OrmEntity()
export class OrmApplicationInfo extends CommonTypeOrm {
  @Column({ nullable: true })
  kakaoId: string;

  @Column({ nullable: true })
  openChatUrl: string;

  @Column({ nullable: true })
  websiteUrl: string;

  @Column({ nullable: true })
  contact: string;

  @Column({ nullable: true, type: 'text' })
  etc: string;
}
