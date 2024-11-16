import { FC, useState } from 'react'
import { IField } from '@interfaces';
import Actions from './Actions';

type BodyProps = {
  data: any[],
  fields: IField[];
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
};

const css = {
  tr: `
    bg-white dark:bg-dbg
    text-black dark:text-white
    hover:bg-gray-200 dark:hover:bg-gray-800
  `,
  th: `
    bg-white dark:bg-dbg
    text-black dark:text-white
  `,
  actions: `
    relative min-w-[50px]
  `,
};

const Body: FC<BodyProps> = (props) => {
  const { data, fields, handleEdit, handleDelete } = props;
  const [iconsIndex, setIconsIndex] = useState<number | null>(null);

  return (
    <>
      {data?.map((item: any, index: number) => (
        <tr
          key={item.id}
          className={css.tr}
          onClick={() => setIconsIndex(index)}
          onMouseEnter={() => setIconsIndex(index)}
          onMouseLeave={() => setIconsIndex(null)}
        >
          <th className={css.th}>{index + 1}</th>
          {fields.map((field: IField, fieldIndex: number) => (
            <td key={fieldIndex}>{field.render(item)}</td>
          ))}
          <td className={css.actions}>
            {iconsIndex === index ? (
              <Actions
                item={item}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ) : (
              <></>
            )}
          </td>
          <th className={css.th}>{index + 1}</th>
        </tr>
      ))}
    </>
  );
};

export default Body;
