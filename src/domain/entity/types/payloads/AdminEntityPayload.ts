export type AdminEntityPayload = {
  id?: number;
  studentId: number;
  name: string;
  phoneNumber: string;
  clubId?: number;
};

export type EditAdminEntityPayload = {
  name?: string;
  phoneNumber?: string;
  clubId?: number;
};
