import { Column, Entity as OrmEntity, ManyToOne } from 'typeorm';
import { OrmClub } from './club.entity';
import { CommonTypeOrm } from './common/common';

@OrmEntity()
export class OrmClubImage extends CommonTypeOrm {
  @Column()
  url!: string;

  @ManyToOne(() => OrmClub, (club) => club.clubImages, { onDelete: 'CASCADE' })
  club: OrmClub;
}
