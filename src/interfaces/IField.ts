export type IField = {
  header: string | "",
  render: (item: any) => JSX.Element;
};
