import { Keyword } from '@/domain/entity/Keyword';
import { IKeywordRepository } from '@/domain/repository/IKeywordRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { toKeyword } from './converters/keyword.converter';
import { OrmKeyword } from './entities/keyword.entity';

@Injectable()
export class KeywordRepository implements IKeywordRepository {
  constructor(@InjectRepository(OrmKeyword) private readonly ormKeywordRepository: Repository<OrmKeyword>) {}

  private toOrmKeyword(keyword: Keyword): OrmKeyword {
    const ormKeyword = new OrmKeyword();
    const id = keyword.getId();
    if (id != -1) ormKeyword.id = id;
    ormKeyword.keyword = keyword.getKeyword();
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

    return Promise.all(realKeywords.map((ormKeyword) => toKeyword(ormKeyword)));
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
