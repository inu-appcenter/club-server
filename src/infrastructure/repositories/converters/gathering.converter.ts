import { Gathering } from '@/domain/entity/Gathering';
import { OrmGathering } from '../entities/gathering.entity';

export async function toGathering(ormGathering: OrmGathering) {
  if (!ormGathering) return null;
  const { category, comments, user, deadline, participants, createdAt } = ormGathering;
  const gathering = await Gathering.new({
    ...ormGathering,
    deadline: new Date(deadline),
    categoryId: category.id,
    commentIds: comments.map((comment) => comment.id),
    userId: user.id,
    participantIds: participants ? participants.map((participant) => participant.id) : [],
  });
  gathering.createdAt = createdAt;
  return gathering;
}
