// Define type for form data
export type IAddCardForm = {
  price: number
  source_id: "1" | "2";
  client_id: string;
  products: string[];
};