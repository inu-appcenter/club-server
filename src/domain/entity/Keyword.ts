import { Entity } from '@/common/entity/Entity';
import { IsString, NotEquals } from 'class-validator';
import { EditKeywordEntityPayload, KeywordEntityPayload } from './types/payloads/KeywordEntityPayload';

/**
 * @description 키워드
 */
export class Keyword extends Entity {
  @IsString()
  @NotEquals('')
  private keyword: string;

  constructor(payload: KeywordEntityPayload) {
    super();
    this.id = payload.id || -1;

    this.keyword = payload.keyword;
  }

  public getKeyword(): string {
    return this.keyword;
  }

  public async edit(payload: EditKeywordEntityPayload): Promise<void> {
    const { keyword } = payload;
    if (keyword) this.keyword = keyword;
    await this.validate();
  }

  public static async new(payload: KeywordEntityPayload): Promise<Keyword> {
    const keyword = new Keyword(payload);
    await keyword.validate();
    return keyword;
  }
}
