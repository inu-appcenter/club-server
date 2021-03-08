export interface ITagType {
  tag: string;
  desc: string;
}

export interface ISwaggerConfig {
  title: string;
  description: string;
  version: string;
  tags: ITagType[];
  basePath: string;
}
