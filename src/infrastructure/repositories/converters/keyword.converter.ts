import { Keyword } from '@/domain/entity/Keyword';
import { OrmKeyword } from '../entities/keyword.entity';

export async function toKeyword(ormKeyword: OrmKeyword): Promise<Keyword> {
  if (!ormKeyword) return null;
  const { id, keyword: keywordName } = ormKeyword;
  const keyword = await Keyword.new({ id, keyword: keywordName });
  return keyword;
}
