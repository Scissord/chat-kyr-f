import axios from '@axios';
import { FC, useState } from 'react';
import { useViewContext } from '@context';
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';
import InputMask from 'react-input-mask';

type Props = {
  fetchCustomers: () => void;
};

const AddModal: FC<Props> = ({ fetchCustomers }) => {
  const context = useViewContext();
  const theme = useAppSelector(selectTheme);

  const [message, setMessage] = useState<string>("");
  const [leadvertex_id, setLeadVertexId] = useState<string>("");

  const [mobilePhone, setMobilePhone] = useState('');
  const [phoneMask, setPhoneMask] = useState('+7 (999) 999 99 99');
  const [phonePlaceholder, setPhonePlaceholder] = useState('+7 (___) ___ __ __');
  const [country, setCountry] = useState('KZ');

  const handleChangeCountry = (val: string) => {
    setMobilePhone('')
    setCountry(val);
    switch (val) {
      case 'KZ': // Казахстан
        setPhoneMask('+7 (999) 999 99 99');
        setPhonePlaceholder('+7 (___) ___ __ __');
        break;
      case 'KYR': // Кыргызстан
        setPhoneMask('+\\9\\96 (999) 999 999');
        setPhonePlaceholder('+996 (___) ___ ___');
        break;
      case 'UZB': // Узбекистан
        setPhoneMask('+\\9\\98 (99) 999 9999');
        setPhonePlaceholder('+998 (__) ___ ____');
        break;
      case 'RU': // Россия
        setPhoneMask('+7 (999) 999 99 99');
        setPhonePlaceholder('+7 (___) ___ __ __');
        break;
      default:
        setPhoneMask('+7 (999) 999 99 99');
        setPhonePlaceholder('+7(___)___-__-__');
        break;
    }
  };

  const handleSendUser = async () => {
    if(!message || !leadvertex_id) {
      context?.notification.show("Заполните все поля", "error");
      return;
    };

    console.log();

    await axios({
      method: 'POST',
      url: `/messages/leadvertex`,
      data: {
        message,
        leadvertex_id,
        phone: mobilePhone !== "" ? mobilePhone.replace(/\D/g, "") + '@c.us' : ""
      },
    })
      .then(() => {
        fetchCustomers();
        context?.modal.hide();
        context?.notification.show("Успешно!", "success");
      })
      .catch(() => {
        context?.notification.show("Ошибка при отправке сообщения", "error")
      });
  };

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center gap-3'>
        <p className='w-32 font-semibold text-sm'>LeadVertext_Id:</p>
        <input
          type="text"
          value={leadvertex_id}
          onChange={(e) => setLeadVertexId(e.target.value)}
          placeholder="Введите..."
          className={`pl-[16px] outline-none h-8 w-full
            bg-transparent text-body-color bg-no-repeat
            bg-[length:16px] bg-[25px_48%] font-body-font
            font-semibold text-[15px] placeholder-input-chat-color
            border border-slate-300 rounded-lg
            ${theme === 'dark' ? 'text-white' : 'text-black'}
          `}
        />
      </div>
      <div className='flex items-center gap-3'>
        <p className='w-32 font-semibold text-sm'>Доп номер:</p>
        <div className='relative'>
          <select
            id="country"
            name="country"
            value={country}
            onChange={(e) => handleChangeCountry(e.target.value)}
            className="absolute h-full max-w-xs top-0 left-1 py-1 px-1 cursor-pointer"
            required
          >
            <option value="KZ">{"\u{1F1F0}\u{1F1FF}"}</option>
            <option value="KYR">{"\u{1F1F0}\u{1F1EC}"}</option>
            <option value="UZB">{"\u{1F1FA}\u{1F1FF}"}</option>
            <option value="RU">{"\u{1F1F7}\u{1F1FA}"}</option>
          </select>
          <InputMask
            placeholder={phonePlaceholder}
            mask={phoneMask}
            type="tel"
            id="correo-electronico"
            name="correo-electronico"
            className={`
              w-full px-4 py-2 border border-gray-300 rounded-md pl-12
              ${theme === 'dark' ? 'text-white' : 'text-black'}
            `}
            value={mobilePhone}
            onChange={(e) => setMobilePhone(e.target.value)}
            required
          />
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <p className='w-32 font-semibold text-sm'>Сообщение:</p>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введите..."
          className={`pl-[16px] outline-none h-8 w-full
            bg-transparent text-body-color bg-no-repeat
            bg-[length:16px] bg-[25px_48%] font-body-font
            font-semibold text-[15px] placeholder-input-chat-color
            border border-slate-300 rounded-lg
            ${theme === 'dark' ? 'text-white' : 'text-black'}
          `}
        />
      </div>
      <button
        onClick={handleSendUser}
        className={`ml-auto max-w-[20vh] mt-4 p-2
          rounded-lg hover:bg-blue-100 border border-slate-300
          ${theme === 'dark' ? 'text-white' : 'text-black'}
        `}
      >
        Отправить
      </button>
    </div>
  )
}

export default AddModal