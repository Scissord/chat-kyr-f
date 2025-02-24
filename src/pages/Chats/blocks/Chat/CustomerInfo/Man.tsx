import { FC, useState } from 'react';

type ManProps = {
  customer_id: string;
  handleSendCertificate: (customer_id: string, product: string, type: string, i: number) => void;
};

const Man: FC<ManProps> = (props) => {
  const { customer_id, handleSendCertificate } = props;
  const [isManOpen, setIsManOpen] = useState(false);

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
    { id: 'cert', label: '2.1 Сертификат ManBalance', i: 1 },
    { id: 'cert', label: '2.2 Сертификат Халал ManBalance', i: 2 },
    { id: 'audio', label: '1.3 Аудио отзыв 1', i: 1 },
    { id: 'audio', label: '1.4 Аудио отзыв 2', i: 2 },
    { id: 'audio', label: '1.5 Аудио отзыв 3', i: 3 },
    { id: 'pic', label: '2.3 Фото ManBalance', i: 1 },
  ];

  return (
    <>
      <p
        className={css.p}
        onClick={() => setIsManOpen(!isManOpen)}
      >
        2. ManBalance
      </p>
      {isManOpen && (
        <div className="flex flex-col gap-3 border px-2 py-2 w-full">
          {items.map((item) => (
            <p
              key={item.id}
              className={css.p}
              onClick={() => handleSendCertificate(customer_id, 'man', item.id, item.i)}
            >
              {item.label}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default Man;
