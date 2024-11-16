import { FC } from 'react'
import { IconEdit, IconTrash } from '@icons';

type ActionsProps = {
  item: any;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
};

const css = {
  container: `
    absolute top-0 right-0 left-0 bottom-0
    flex items-center justify-start sm:justify-end gap-1
  `,
  icon: `
    cursor-pointer
  `,
};

const Actions: FC<ActionsProps> = (props) => {
  const { item, handleEdit, handleDelete } = props;

  return (
    <div className={css.container}>
      <div
        onClick={() => handleEdit(item.id)}
        className={css.icon}
      >
        <IconEdit width="1.4em" height="1.4em"/>
      </div>
      <div
        onClick={() => handleDelete(item.id)}
        className={css.icon}
      >
        <IconTrash width="1.4em" height="1.4em"/>
      </div>
    </div>
  )
}

export default Actions