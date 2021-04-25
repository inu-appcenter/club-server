import { Gathering } from '@/domain/entity/Gathering';
import { OrmGathering } from '../entities/gathering.entity';

export async function toGathering(ormGathering: OrmGathering) {
  if (!ormGathering) return null;
  const { category, comments, user } = ormGathering;
  return await Gathering.new({
    ...ormGathering,
    categoryId: category.id,
    commentIds: comments.map((comment) => comment.id),
    userId: user.id,
  });
}
