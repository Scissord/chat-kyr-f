import axios from '@axios';
import { IconClients, IconMessages, IconProduct, IconGlasses } from '@icons';
import { FC, useEffect, useState } from 'react'

type Card = {
  id: number;
  number: number | string;
  title: string;
  description: string;
  color: string;
  icon: string;
};

const Cards: FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    await axios({
      method: 'GET',
      url: `/admin/get_statistics`
    }).then((res) => {
      setCards(res.data);
    })
  };

  return (
    <div
      className='grid grid-cols-2 gap-3 w-full'
    >
      {cards.map((card) => (
        <div
          key={card.id}
          className='w-full h-full text-white flex flex-col justify-between rounded-lg shadow-lg'
          style={{ backgroundColor: card.color }}
        >
          <div className='flex items-start justify-between px-6 pt-6'>
            <div className='flex flex-col gap-2 justify-between'>
              <h1 className='text-2xl font-bold'>{card.number}</h1>
              <p className='text-lg'>{card.title}</p>
              <p className='text-xs'>{card.description}</p>
            </div>
            <div className='h-20 w-20'>
              {card.icon === "clients" && <IconClients/>}
              {card.icon === "messages" && <IconMessages/>}
              {card.icon === "product" && <IconProduct/>}
              {card.icon === "glasses" && <IconGlasses/>}
            </div>
          </div>
          <div className='h-8 w-full bg-black bg-opacity-15 rounded-bl-lg rounded-br-lg'/>
        </div>
      ))}
    </div>
  )
}

export default Cards;
