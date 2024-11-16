import { FC } from 'react'
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';

const Map: FC = () => {
  return (
    <div className='w-full h-full flex items-center justify-center shadow-lg'>
      <VectorMap
        map={worldMill}
        backgroundColor='#10163A'
      />
    </div>
  )
}

export default Map;
