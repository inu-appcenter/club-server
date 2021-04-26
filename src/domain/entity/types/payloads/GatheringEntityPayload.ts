export type GatheringEntityPayload = {
  id?: number;
  title: string;
  body: string;
  numberOfPersonsToInvite: number;
  openChatUrl: string;
  userId: number;
  commentIds?: number[];
  categoryId: number;
  closed?: boolean;
  deadline: Date;
};

export type EditGatheringEntityPayload = {
  title?: string;
  body?: string;
  numberOfPersonsToInvite?: number;
  openChatUrl?: string;
  categoryId?: number;
  closed?: boolean;
  deadline?: Date;
};
