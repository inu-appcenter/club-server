export type AdminEntityPayload = {
  id?: number;
  studentId: number;
  name: string;
  phoneNumber: string;
  clubId?: number;
  role?: boolean;
};

export type EditAdminEntityPayload = {
  name?: string;
  phoneNumber?: string;
  clubId?: number;
  role?: boolean;
};
