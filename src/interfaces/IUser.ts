export type IUser = {
  id: string;
  password: string;
  name: string;
  avatar: string;
  role: {
    id: string;
    status: number;
    label: string;
  };
  role_id: string;
};