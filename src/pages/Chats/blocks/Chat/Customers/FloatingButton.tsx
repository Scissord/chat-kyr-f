import { FC, useContext } from 'react'
import { useChats, ViewContext } from '@context';
import AddModal from './AddModal';
import { IconSendPlus } from '@icons';

const FloatingButton: FC = () => {
  const context = useContext(ViewContext);
  const { fetchCustomers } = useChats();

  const handleAddConversation = () => {
    context?.modal.show({
      title: 'Написать первым',
      children: <AddModal fetchCustomers={fetchCustomers}/>
    })
  };

  return (
    <div
      onClick={() => handleAddConversation()}
      className='fixed bottom-3 right-3 bg-[#646dff] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer shadow-xl text-white'
    >
      <IconSendPlus/>
    </div>
  )
}

export default FloatingButton