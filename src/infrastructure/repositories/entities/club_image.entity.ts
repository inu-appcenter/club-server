import { Column, Entity as OrmEntity, ManyToOne } from 'typeorm';
import { OrmClub } from './club.entity';
import { CommonTypeOrm } from './common/common';

@OrmEntity('clubImage')
export class OrmClubImage extends CommonTypeOrm {
  @Column()
  url!: string;

  @ManyToOne((type) => OrmClub, (club) => club.images)
  club: OrmClub;
}
