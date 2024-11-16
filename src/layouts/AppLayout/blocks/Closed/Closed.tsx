import { FC } from 'react'
import { toggleSidebar } from '@store/reducers/sidebarSlice';
import { useAppDispatch } from '@hooks';
import ClosedSidebar from './ClosedSidebar';

const Closed: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      className='h-full'
      onMouseEnter={() => dispatch(toggleSidebar())}
    >
      <ClosedSidebar/>
    </div>
  );
};

export default Closed