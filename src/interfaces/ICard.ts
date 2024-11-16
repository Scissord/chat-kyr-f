export type ICard = {
  id: string;
  name: string;
  avatar: string | null;
  good: string;
  order_id: string;
  manager_id: string;
  text: string;
  counter?: number;
  path?: string;
  time?: string;
  last_message_date: string;
  isfixed: boolean;
};
