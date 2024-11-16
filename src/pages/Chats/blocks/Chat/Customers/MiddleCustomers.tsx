import { FC, useEffect, useRef } from 'react'
import { useChats, useSocketContext } from '@context'
import { ICustomer } from '@interfaces';

const MiddleCustomers: FC = () => {
  const {
    customers,
    customer,
    setCustomer,
    setCustomers,
    page,
    setPage,
    fetchConversation,
    setFile,
  } = useChats();

  const containerRef = useRef<HTMLDivElement>(null);

  const { newMessage, sender } = useSocketContext();

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollHeight, scrollTop, clientHeight } = containerRef.current;
        if (scrollTop + clientHeight + 1 >= scrollHeight) {
          const newPage = page + 1;
          setPage(newPage);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [containerRef, page]);

  useEffect(() => {
    if(newMessage && sender) {
      handleRaiseConversation();
    };
  }, [newMessage])

  const handleChatClick = (customer: ICustomer) => {
    const existIndex = customers?.findIndex((c: ICustomer) => {
      return +c.id === +customer?.id
    });

    if (existIndex !== -1 && customers[existIndex].counter > 0) {
      const updatedCustomers = [...customers];
      updatedCustomers[existIndex].counter = 0;
      setCustomers(updatedCustomers);
    };

    setCustomer(customer);
    fetchConversation(customer?.id);
    setFile(null);
  };

  const handleRaiseConversation = () => {
    const existIndex = customers?.findIndex((c: ICustomer) => {
      if(c.id && sender?.id) {
        return +c.id === +sender?.id
      };
    });

    if (existIndex !== -1) {
      const existingConversation = customers[existIndex];
      existingConversation.counter += 1;
      existingConversation.last_message_text = newMessage?.text ?? "";
      customers.splice(existIndex, 1);
      setCustomers([existingConversation, ...customers]);
    }
  };

  // const handleUpdateCustomerStatus = () => {
  //   let newCustomers: ICustomer[] = [];

  //   const existIndex = customers?.findIndex((c: ICustomer) => c.order_id === newCustomer?.order_id);
  //   let status;
  //   if(user){
  //     status = +user?.role?.status;
  //   };

  //   if (existIndex !== -1 && newCustomer) {
  //     if(status === 100) {
  //       newCustomers = [
  //         newCustomer,
  //         ...customers?.filter((_, index) => index !== existIndex)
  //       ];
  //     } else if (status === +newCustomer?.status) {
  //       newCustomers = [
  //         newCustomer,
  //         ...customers?.filter((_, index) => index !== existIndex)
  //       ];
  //     } else {
  //       newCustomers = [
  //         ...customers?.filter((_, index) => index !== existIndex)
  //       ];
  //     };
  //     setCustomers(newCustomers);
  //   } else {
  //     if(newCustomer && status === 100) {
  //       newCustomers = [
  //         newCustomer,
  //         ...customers
  //       ];
  //     } else if(newCustomer && status === +newCustomer?.status) {
  //       newCustomers = [
  //         newCustomer,
  //         ...customers
  //       ];
  //     } else {
  //       newCustomers = [...customers];
  //     };
  //     setCustomers(newCustomers);
  //   };
  // };

  // const handleRaiseConversation = () => {
  //   const existIndex = customers?.findIndex((c: ICustomer) => {
  //     if(c.id) {
  //       return +c.id === +raiseConversation?.id
  //     };
  //   });

  //   if (existIndex !== -1) {
  //     if(user?.role.status === +raiseConversation?.status) {
  //       const existingConversation = customers[existIndex];
  //       existingConversation.counter = (existingConversation.counter || 0) + (raiseConversation?.counter);
  //       customers.splice(existIndex, 1);
  //       setCustomers([existingConversation, ...customers]);
  //     };
  //   }
  // };

  //   {isCustomersLoading ? (
  //     <Loader
  //       className='h-[100%] loading-lg'
  //     />
  //   )

  return (
    <div ref={containerRef} className='flex-grow overflow-y-auto'>
      {customers && customers.length > 0 && customers?.map((conversation) => (
        <div
          key={conversation.id}
          onClick={() => handleChatClick(conversation)}
          className={`relative select-none
            cursor-pointer flex items-center gap-2 px-5 py-3
          hover:bg-gray-100 dark:hover:bg-[#2d3f65]
            ${customer?.id === conversation.id && 'bg-gray-100 dark:bg-[#2d3f65]'}
          `}
        >
          {customer?.id === conversation.id &&
            <div className='absolute left-0 h-full w-1 bg-[#646dff]'/>
          }
          <div className="w-12">
            <img
              src={conversation.avatar ? conversation.avatar : 'pics/default_avatar.png'}
              className='border border-slate-300 rounded-full'
              alt="avatar"
            />
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex items-center justify-between w-full'>
              <p className={`font-bold text-[15px] text-black dark:text-white`}>
                {conversation.name}
              </p>
              <p className='text-[10px] text-black dark:text-white'>
                {conversation.time}
              </p>
            </div>
            <div className='flex items-center justify-between w-full'>
              <p className="whitespace-nowrap overflow-hidden overflow-ellipsis text-[var(--msg-message)] text-[13px]">
                {conversation.last_message_text.length > 27
                  ? conversation.last_message_text.slice(0, 27) + '...'
                  : conversation.last_message_text
                }
              </p>
              {conversation.counter !== 0 && <p className='flex items-center justify-center text-[8px] w-3 h-3 bg-[#646dff] rounded-full text-white'>
                {conversation.counter}
              </p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiddleCustomers;
