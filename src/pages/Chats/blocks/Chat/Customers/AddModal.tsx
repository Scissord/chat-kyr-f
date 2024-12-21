import axios from '@axios';
import { FC, useState } from 'react';
import { useViewContext } from '@context';
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

type Props = {
  fetchCustomers: () => void;
};

const AddModal: FC<Props> = ({ fetchCustomers }) => {
  const context = useViewContext();
  const theme = useAppSelector(selectTheme);

  const [message, setMessage] = useState<string>("");
  const [phone, setPhone] = useState<string>('');
  const [leadvertex_id, setLeadVertexId] = useState<string>("");

  const handleSendUser = async () => {
    if(!message || !leadvertex_id) {
      context?.notification.show("Заполните все поля", "error");
      return;
    };

    await axios({
      method: 'POST',
      url: `/messages/leadvertex`,
      data: {
        message,
        leadvertex_id,
        phone: phone !== "" ? phone + '@c.us' : ""
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
        <PhoneInput
          country={'kz'}
          value={phone}
          onChange={(value) => setPhone(value)}
          enableSearch={true}
          placeholder="Введите номер телефона"
        />
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