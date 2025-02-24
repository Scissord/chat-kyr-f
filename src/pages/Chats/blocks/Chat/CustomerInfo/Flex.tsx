import { FC, useState } from 'react';

type FlexProps = {
  customer_id: string;
  handleSendCertificate: (customer_id: string, product: string, type: string, i: number) => void;
};

const Flex: FC<FlexProps> = (props) => {
  const { customer_id, handleSendCertificate } = props;
  const [isFlexOpen, setIsFlexOpen] = useState(false);

  const css = {
    p: `
      text-md cursor-pointer
      hover:text-slate-400
      dark:hover:text-slate-400
      text-black dark:text-white
      select-none transition-all
      duration-300 ease-in-out
    `,
  };

  const items = [
    { id: 'cert', label: '1.1 Сертификат FlexBalance', i: 1 },
    { id: 'cert', label: '1.2 Сертификат Халал FlexBalance', i: 2 },
    { id: 'audio', label: '1.3 Аудио отзыв 1', i: 1 },
    { id: 'audio', label: '1.4 Аудио отзыв 2', i: 2 },
    { id: 'audio', label: '1.5 Аудио отзыв 3', i: 3 },
    { id: 'audio', label: '1.6 Аудио отзыв 4', i: 4 },
    { id: 'pic', label: '1.7 Фото FlexBalance', i: 1 },
  ];

  return (
    <>
      <p
        className={css.p}
        onClick={() => setIsFlexOpen(!isFlexOpen)}
      >
        1. FlexBalance
      </p>
      {isFlexOpen && (
        <div className="flex flex-col gap-3 border px-2 py-2 w-full">
          {items.map((item) => (
            <p
              key={item.id}
              className={css.p}
              onClick={() => handleSendCertificate(customer_id, 'flex', item.id, item.i)}
            >
              {item.label}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default Flex;
