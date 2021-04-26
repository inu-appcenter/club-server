export interface ICreateGatheringPort {
  userId: number;
  categoryId: number;
  title: string;
  body: string;
  numberOfPersonsToInvite: number;
  openChatUrl: string;
  deadline: Date;
}
