export type AdminEntityPayload = {
  id?: number;
  studentId: number;
  name: string;
  phoneNumber: string;
  demand: boolean;
};

export type EditAdminEntityPayload = {
  name?: string;
  phoneNumber?: string;
  demand?: boolean;
};
