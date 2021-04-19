import { Keyword } from '@/domain/entity/Keyword';
import { IKeywordRepository } from '@/domain/repository/IKeywordRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrmKeyword } from './entities/keyword.entity';

@Injectable()
export class KeywordRepository implements IKeywordRepository {
  constructor(@InjectRepository(OrmKeyword) private readonly ormKeywordRepository: Repository<OrmKeyword>) {}

  private async toKeyword(ormKeyword: OrmKeyword): Promise<Keyword> {
    if (!ormKeyword) return null;
    const { id, keyword: keywordName } = ormKeyword;
    const keyword = await Keyword.new({ id, keyword: keywordName });
    return keyword;
  }

  private toOrmKeyword(keyword: Keyword): OrmKeyword {
    const ormKeyword = new OrmKeyword();
    if (keyword.id != -1) ormKeyword.id = keyword.id;
    ormKeyword.keyword = keyword.keyword;
    return ormKeyword;
  }

  async createKeywords(keywords: Keyword[]): Promise<Keyword[]> {
    const ormKeywords = keywords.map((keyword) => this.toOrmKeyword(keyword));
    const realKeywords = await Promise.all(
      ormKeywords.map((orm) => this.ormKeywordRepository.findOne({ keyword: orm.keyword })),
    );
    // todo: 병렬 수행
    for (const i in realKeywords) {
      if (!realKeywords[i]) realKeywords[i] = await this.ormKeywordRepository.save(ormKeywords[i]);
    }

    return Promise.all(realKeywords.map((ormKeyword) => this.toKeyword(ormKeyword)));
  }
  getKeywordById(keywordId: number): Promise<Keyword> {
    throw new Error('Method not implemented.');
  }
  getKeywordByKeyword(keyword: string): Promise<Keyword> {
    throw new Error('Method not implemented.');
  }
  removeKeywordById(keywordId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
