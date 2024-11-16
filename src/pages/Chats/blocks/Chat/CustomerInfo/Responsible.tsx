import { FC } from 'react';

type ResponsibleProps = {
  manager: string;
};

const Responsible: FC<ResponsibleProps> = ({ manager }) => {

  return (
    <>
      <h1 className='font-bold text-xl text-black dark:text-white'>Ответственный</h1>
      <p className='text-black dark:text-white'>{manager}</p>
    </>
  );
};

export default Responsible;
