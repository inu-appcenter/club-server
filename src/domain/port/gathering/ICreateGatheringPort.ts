export interface ICreateGatheringPort {
  userId: number;
  categoryId: number;
  title: string;
  body: string;
  numberOfPersonsJoined: number;
  numberOfPersonsToInvite: number;
  openChatUrl: string;
  deadline: Date;
}
