import { ICard } from "@interfaces";

export type IColumn = {
  id: string | "";
  title: string | "";
  cardsIds: string[] | [];
  position: number | 0;
  manager_id: string;
  created_at: Date | null;
  updated_at: Date | null;
  status: number;
  cards: ICard[];
  page: number;
};
