export type SuperAdminEntityPayload = {
  id?: number;
  superAdminId: string;
  name: string;
  phoneNumber: string;
  password: string;
};

export type EditSuperAdminEntityPayload = {
  superAdminId?: string;
  name?: string;
  phoneNumber?: string;
  password?: string;
};
