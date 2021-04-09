export type AdminEntityPayload = {
  id?: number;
  studentId: number;
  name: string;
  phoneNumber: string;
};

export type EditAdminEntityPayload = {
  name?: string;
  phoneNumber?: string;
};
