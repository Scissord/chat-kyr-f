import { FC } from 'react'
import { IField, IHeader } from '@interfaces';
import Header from './blocks/Header';
import Body from './blocks/Body';

type TableProps = {
  data: any[],
  headers: IHeader[];
  fields: IField[];
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
};

const css = {
  container: `
    table table-xs
    table-pin-rows table-pin-cols
  `,
};

export const Table: FC<TableProps> = (props) => {
  const { headers, data, fields, handleEdit, handleDelete } = props;

  return (
    <table className={css.container}>
      <thead>
        <Header
          headers={headers}
        />
      </thead>
      <tbody>
        <Body
          data={data}
          fields={fields}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </tbody>
      <tfoot>
        <Header
          headers={headers}
        />
      </tfoot>
    </table>
  )
};
