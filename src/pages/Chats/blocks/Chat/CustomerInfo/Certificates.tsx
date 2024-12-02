import { FC } from 'react';

type CertificatesProps = {
  setFile: (obj: File | null) => void;
  setMessage: (val: string) => void;
  setLoading: (val: boolean) => void;
};

const css = {
  p: `
    text-md cursor-pointer
    hover:text-slate-400
    dark:hover:text-slate-400
    text-black dark:text-white
  `
};

const Certificates: FC<CertificatesProps> = (props) => {
  const { setLoading, setMessage, setFile } = props;

  const handleSetCert = async (url: string) => {
    setLoading(true);
    const response = await fetch(url);
    if (!response.ok) throw new Error('Image fetch failed');

    const name = url.split('/').pop() || 'cert.jpg';

    const blob = await response.blob();
    const file = new File([blob], name, { type: 'image/jpeg' });

    setMessage("");
    setFile(file);
    setLoading(false);
  };

  const handleSetUrl = async (url: string) => {
    setLoading(true);
    setMessage(url);
    setFile(null);
    setLoading(false);
  };

  return (
    <>
      <h1 className='font-bold text-xl text-black dark:text-white'>Сертификаты</h1>
      <p
        className={css.p}
        onClick={() => handleSetCert('/templates/flex-cert.jpg')}
      >
        1. FlexBalance
      </p>
      <p
        className={css.p}
        onClick={() => handleSetCert('/templates/flex-halal-cert.webp')}
      >
        1.1 Халал FlexBalance
      </p>
      <p
        className={css.p}
        onClick={() => handleSetCert('/products/flex-balance.webp')}
      >
        1.2 Фото FlexBalance
      </p>
      <p
        className={css.p}
        onClick={() => handleSetCert('/templates/man-cert.jpg')}
      >
        2. ManBalance
      </p>
      <p
        className={css.p}
        onClick={() => handleSetCert('/templates/man-halal-cert.webp')}
      >
        2.1 Халал ManBalance
      </p>
      <p
        className={css.p}
        onClick={() => handleSetCert('/templates/man.png')}
      >
        2.2 Фото ManBalance
      </p>
      <p
        className={css.p}
        onClick={() => handleSetCert('/templates/payment-check.jpg')}
      >
        3. Счет на оплату
      </p>
      <p
        className={css.p}
        onClick={() => handleSetCert('/videos/payment.mp4')}
      >
        3. Инструкция счета на оплату
      </p>
      <p
        className={css.p}
        onClick={() => handleSetUrl('balance-vita.com/')}
      >
        balance-vita.com/
      </p>
    </>
  );
};

export default Certificates;
