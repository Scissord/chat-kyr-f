import { FC, memo } from 'react';
import { BoardProvider } from '@context';
import Board from './blocks/Board';

const Home: FC = memo(() => {
  return (
    <BoardProvider>
      <Board/>
    </BoardProvider>
  );
});

export default Home;
