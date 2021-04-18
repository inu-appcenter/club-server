import { Entity } from '@/common/entity/Entity';
import { IsString, NotEquals } from 'class-validator';
import { EditKeywordEntityPayload, KeywordEntityPayload } from './types/payloads/KeywordEntityPayload';

/**
 * @description 키워드
 */
export class Keyword extends Entity {
  @IsString({ message: '문자열이 아님' })
  @NotEquals('', { message: '빈 문자열임' })
  private _keyword: string;

  constructor(payload: KeywordEntityPayload) {
    super();
    this._id = payload.id || -1;

    this._keyword = payload.keyword;
  }

  public get keyword() {
    return this._keyword;
  }

  public async edit(payload: EditKeywordEntityPayload): Promise<void> {
    const { keyword } = payload;
    if (keyword) this._keyword = keyword;
    await this.validate();
  }

  public static async new(payload: KeywordEntityPayload): Promise<Keyword> {
    const keyword = new Keyword(payload);
    await keyword.validate();
    return keyword;
  }
}
