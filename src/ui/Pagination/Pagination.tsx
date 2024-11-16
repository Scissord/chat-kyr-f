import { FC } from 'react';

interface IPaginationProps {
  page: number;
  setPage: (pageUpdater: (prevPage: number) => number) => void;
  lastPage: number;
};

const css = {
  container: `
    join mt-6 ml-3
  `,
  button: `
    join-item btn hover:bg-gray-200
    dark:hover:bg-gray-700
    bg-white dark:bg-dbg text-black
    dark:text-white
  `,
};

export const Pagination: FC<IPaginationProps> = (props) => {
  const { page, setPage, lastPage } = props;

  return (
    <div className={css.container}>
      <button
        onClick={() => setPage(prev => Math.max(prev - 1, 1))}
        className={css.button}
      >
        «
      </button>
      <button className={css.button}>
        Page {page}
      </button>
      <button
        onClick={() => setPage((prev) => {
          if (prev < lastPage) {
            return prev + 1;
          }
          return prev;
        })}
        className={css.button}
      >
        »
      </button>
    </div>
  )
}

export default Pagination;
