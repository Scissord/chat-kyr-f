import { ChangeEvent, KeyboardEvent, memo, FC } from 'react'
import { DragDropContext } from '@hello-pangea/dnd';
import { Loader } from '@ui';
import { useBoard } from '@context';
import { IconReload, IconSearch } from '@icons';
import Column from './Column';

const css = {
  loader: `
    min-h-[100vh] loading-lg
  `,
  top_section: `
    h-[10vh] flex items-center
    justify-between relative bg-white dark:bg-dbg
  `,
  reload: `
    cursor-pointer ml-3 border border-black
    dark:border-white rounded px-1 py-1
    hover:bg-gray-200 dark:hover:bg-gray-600
  `,
  label: `
    text-center w-full text-4xl
    font-semibold text-black dark:text-white
  `,
  inputWrapper: `
    relative
  `,
  search: `
    h-8 rounded border text-sm border-black
    dark:border-white mr-3 px-2
    text-black dark:text-white placeholder-black
    dark:placeholder-white
  `,
  iconPosition: `
    absolute top-2 right-5
  `,
  bottom_section: `
    h-[90vh] flex
    px-3 overflow-x-auto
    gap-3 z-50 bg-white dark:bg-dbg
  `,
  columnWrapper: `
    flex gap-3
  `,
};

const Board: FC = memo(() => {
  const {
    columns,
    cards,
    columnsLoading,
    cardsLoading,
    onDragEnd,
    onDragStart,
    search,
    setSearch,
    handleKeyDown,
    deleteCard,
    toggleFixCard,
    incrementPage,
    getColumns
  } = useBoard();

  if(columnsLoading) return <Loader className={css.loader}  />

  return (
    <>
      <section className={css.top_section}>
        <div className={css.reload} onClick={() => getColumns()}>
          <IconReload/>
        </div>
        <p className={css.label}>Воронка</p>
        <div className={css.inputWrapper}>
          <input
            type="text"
            value={search}
            placeholder='order_id / 1111111'
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)}
            className={css.search}
          />
          <div className={css.iconPosition}>
            <IconSearch/>
          </div>
        </div>
      </section>
      <section className={css.bottom_section}>
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
          <div className={css.columnWrapper}>
            {columns?.map((column) => (
              <Column
                key={column.id}
                column={column}
                cards={cards}
                deleteCard={deleteCard}
                toggleFixCard={toggleFixCard}
                incrementPage={incrementPage}
                cardsLoading={cardsLoading}
              />
            ))}
          </div>
        </DragDropContext>
      </section>
    </>
  );
});

export default Board;
