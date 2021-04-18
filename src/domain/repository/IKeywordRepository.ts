import { Keyword } from '../entity/Keyword';

export interface IKeywordRepository {
  createKeywords(keywords: Keyword[]): Promise<Keyword[]>;
  getKeywordById(keywordId: number): Promise<Keyword>;
  getKeywordByKeyword(keyword: string): Promise<Keyword>;
  removeKeywordById(keywordId: number): Promise<void>;
}
