import { FC } from 'react';
import Flex from './Flex';
import Man from './Man';
import Payment from './Payment';

type CertificatesProps = {
  customer_id: string;
  handleSendCertificate: (customer_id: string, product: string, type: string, i: number) => void;
  handleSetUrl: (url: string) => void;
};

const Templates: FC<CertificatesProps> = (props) => {
  const { customer_id, handleSetUrl, handleSendCertificate } = props;

  const css = {
    p: `
      text-md cursor-pointer
      hover:text-slate-400
      dark:hover:text-slate-400
      text-black dark:text-white
      select-none transition-all
      duration-300 ease-in-out
    `
  };

  return (
    <>
      <h1 className='font-bold text-xl text-black dark:text-white'>Шаблоны</h1>
      <Flex customer_id={customer_id} handleSendCertificate={handleSendCertificate}/>
      <Man customer_id={customer_id} handleSendCertificate={handleSendCertificate}/>
      <Payment customer_id={customer_id} handleSendCertificate={handleSendCertificate}/>
      <div className="flex flex-col gap-3 border px-2 py-2 w-full">
        <p
          key={'coupon'}
          className={css.p}
          onClick={() => handleSendCertificate(customer_id, 'coupon', 'coupon', 1)}
        >
          {"Купон 10%"}
        </p>
      </div>
      <p
        className={css.p}
        onClick={() => handleSetUrl('balance-vita.com/')}
      >
        balance-vita.com/
      </p>
    </>
  );
};

export default Templates;
