export type CommentEntityPayload = {
  id?: number;
  content: string;
  level: number;
};

export type EditCommentEntityPayload = {
  content?: string;
};
