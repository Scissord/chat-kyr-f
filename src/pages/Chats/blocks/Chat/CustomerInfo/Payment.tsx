import { FC, useState } from 'react';

type PaymentProps = {
  customer_id: string;
  handleSendCertificate: (customer_id: string, product: string, type: string, i: number) => void;
};

const Payment: FC<PaymentProps> = (props) => {
  const { customer_id, handleSendCertificate } = props;
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

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
    { id: 'cert', label: '3.1 Счет на оплату', i: 1 },
    { id: 'video', label: '3.2 Инструкция счета на оплату', i: 1 },
    { id: 'video', label: '3.3 Рассрочка МПлюс часть 1', i: 2 },
    { id: 'video', label: '3.4 Рассрочка МПлюс часть 2', i: 3 },
  ];

  return (
    <>
      <p
        className={css.p}
        onClick={() => setIsPaymentOpen(!isPaymentOpen)}
      >
        3. Оплата
      </p>
      {isPaymentOpen && (
        <div className="flex flex-col gap-3 border px-2 py-2 w-full">
          {items.map((item) => (
            <p
              key={item.id}
              className={css.p}
              onClick={() => handleSendCertificate(customer_id, 'payment', item.id, item.i)}
            >
              {item.label}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default Payment;
