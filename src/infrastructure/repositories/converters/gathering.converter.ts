import { Gathering } from '@/domain/entity/Gathering';
import { OrmGathering } from '../entities/gathering.entity';

export async function toGathering(ormGathering: OrmGathering) {
  if (!ormGathering) return null;
  const { category, comments, user, deadline, createdAt } = ormGathering;
  const gathering = await Gathering.new({
    ...ormGathering,
    deadline: new Date(deadline),
    categoryId: category.id,
    commentIds: comments.map((comment) => comment.id),
    userId: user.id,
  });
  gathering.createdAt = createdAt;
  return gathering;
}
