export type UserEntityPayload = {
  id?: number;
  studentId: number;
  nickname: string;
};

export type EditUserEntityPayload = {
  nickname?: string;
};
