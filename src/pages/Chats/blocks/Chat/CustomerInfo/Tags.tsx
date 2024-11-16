import { FC } from 'react';

type TagsProps = {

};

const Tags: FC<TagsProps> = (props) => {
  return (
    <>
      <div className='flex items-center justify-between w-full'>
        <h1 className='font-bold text-xl text-black dark:text-white'>Теги</h1>
        <p className='text-black dark:text-white cursor-pointer select-none'>+</p>
      </div>
      <div className='flex items-center gap-3 w-full overflow-x-auto scroll'>
        <p className='whitespace-nowrap text-xs py-1 px-2 border border-green-500 rounded-full text-green-500'>
          Новый
        </p>
        <p className='whitespace-nowrap text-xs py-1 px-2 border border-yellow-500 rounded-full text-yellow-500'>
          В ожидании
        </p>
        <p className='whitespace-nowrap text-xs py-1 px-2 border border-blue-500 rounded-full text-blue-500'>
          Обрабатывается
        </p>
        <p className='whitespace-nowrap text-xs py-1 px-2 border border-red-500 rounded-full text-red-500'>
          Завершён
        </p>
      </div>
    </>
  );
};

export default Tags;
