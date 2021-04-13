import { Column, Entity as OrmEntity, ManyToOne } from 'typeorm';
import { OrmClub } from './club.entity';
import { CommonTypeOrm } from './common/common';

@OrmEntity()
export class OrmClubToday extends CommonTypeOrm {
  @Column()
  title!: string;

  @Column()
  body!: string;

  @Column({ nullable: true })
  headerImageUrl?: string;

  @ManyToOne(() => OrmClub, (club) => club.clubTodays, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  club: OrmClub;
}
