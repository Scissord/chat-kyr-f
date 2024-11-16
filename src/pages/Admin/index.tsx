import { FC } from 'react';

import Cards from './blocks/Cards';
import BarChart from './blocks/BarChart';
import RightCards from './blocks/RightCards';
import Map from './blocks/Map';

const Admin: FC = () => {
  return (
    <div className='min-h-[100vh] bg-white dark:bg-dbg flex items-center justify-center'>
      <div className='container mx-auto flex flex-col gap-3 h-[95vh]'>
        <div className='h-1/2 flex gap-3'>
          <Cards/>
          <Map/>
        </div>
        <div className='h-1/2 flex gap-3'>
          <BarChart/>
          <RightCards/>
        </div>
      </div>
    </div>
  );
};

export default Admin;
