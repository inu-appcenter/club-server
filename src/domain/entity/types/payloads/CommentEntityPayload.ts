import { Comment } from '../../Comment';
import { User } from '../../User';

export type CommentEntityPayload = {
  id?: number;
  content: string;
  user: User;
  replies?: Comment[];
};

export type EditCommentEntityPayload = {
  content?: string;
};
