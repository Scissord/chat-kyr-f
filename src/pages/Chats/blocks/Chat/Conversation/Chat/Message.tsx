import { FC, Fragment, MouseEvent, useState } from 'react';
import { Audio, Search } from '@ui';
import { IMessage } from '@interfaces';
import { useChats, useViewContext } from '@context';
import { IconCloudDownload } from '@icons';
import Send from './Send';
import ReactDOM from "react-dom";
import axios from '@axios';
import '../scroll.css';

type MessageProps = {
  message: IMessage;
  isActive: boolean;
  onContextMenu: (event: any) => void;
  replyMessage: (message_id: string, customer_id: string) => Promise<void>;
  onCloseMenu: () => void;
  menuPosition: { x: number; y: number };
};

const Message: FC<MessageProps> = (props) => {
  const {
    message, isActive,
    onContextMenu, onCloseMenu,
    replyMessage, menuPosition
  } = props;

  const context = useViewContext();
  const { customers, search, setSearch, setPage } = useChats();

  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  const openGoogleMaps = (lat: string, lon: string) => {
    const url = `https://www.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
    window.open(url, '_blank');
  };

  const handleSearch = (text: string) => {
    setSearch(text)
    setPage(1);
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleDownloadFile = async (file: any) => {
    try {
      const res = await axios({
        method: 'POST',
        url: '/download/file',
        data: file,
        responseType: 'blob'
      });

      // Create a blob from the response data
      const blob = new Blob([res.data], { type: file.contentType });

      // Create a download link
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();

      // Clean up the link
      a.remove();
      URL.revokeObjectURL(downloadUrl);

      console.log('File downloaded successfully');

    } catch (err) {
      console.log(err);
      context?.notification.show('Ошибка при скачке файлов', 'error');
    };
  };

  const openModal = () => setIsImageModalOpen(true);
  const closeModal = () => setIsImageModalOpen(false);

  const renderContextMenu = () => {
    return (
      <div
        className="fixed z-10 bg-gray-300 border shadow-lg p-2 h-40 scroll"
        style={{
          top: `${menuPosition.y}px`,
          left: `${menuPosition.x}px`,
        }}
      >
        <div className='flex items-center justify-between gap-3'>
          <Search
            value={search}
            setValue={(text: string) => handleSearch(text)}
            placeholder="Поиск..."
            loading={false}
            className="border w-full text-black dark:text-white"
          />
          <button
            onClick={() => onCloseMenu()}
            className="btn btn-sm btn-circle btn-ghost"
          >
            ✕
          </button>
        </div>
        <br />
        {customers &&
          customers.length > 0 &&
          customers.map((customer) => (
            <ul
              key={customer?.id}
              className=" flex items-center justify-between p-1 border-t border-b text-black dark:text-white"
            >
              <li>{customer?.name}</li>
              <Send onClick={() => replyMessage(message?.id, customer?.id)} />
            </ul>
          ))}
      </div>
    );
  };

  return (
    <div
      className={`
        relative flex items-end gap-2
        ${!message.incoming ? 'flex-row-reverse' : 'flex-row'}
      `}
    >
      <div className='flex flex-col items-center gap-1'>
        <img
          src={!message.incoming ? 'pics/default_avatar.png' : message?.avatar ? message?.avatar : 'pics/default_avatar.png'}
          className='h-10 w-10 rounded-full border border-slate-300'
          alt='avatar'
        />
        {!message.incoming && <p className='text-[12px]'>
          {message?.manager_name ? message?.manager_name?.slice(0, 5) : "ИИ"}
        </p>}
      </div>
      <div
        className={`
          overflow-hidden inline-block relative min-w-[90px] max-w-[50%]
          ${message.incoming && 'rounded-r-md rounded-tl-md bg-gray-100 text-black px-2 py-2'}
          ${!message.incoming && 'rounded-l-md rounded-tr-md bg-[#646dff] text-white px-2 py-2'}
        `}
        onContextMenu={onContextMenu}
      >
        {message?.quoted_message && (
          <p className='bg-slate-100 px-2 py-1 border-b border-black'>{message?.quoted_message}</p>
        )}
        <p className='text-sm'>{message?.text}</p>
        {message?.attachments?.map((attachment) => (
          <Fragment key={attachment.id}>
            {/* КАРТЫНКИ */}
            {attachment?.contentType?.includes('image') && <>
              <img
                src={attachment.link}
                alt={attachment.link}
                onClick={openModal}
                className='w-fit min-h-16 max-h-40 rounded-lg cursor-pointer'
              />
              <div
              onClick={() => handleDownloadFile(attachment)}
              className={`
                absolute text-[8px] bottom-0 cursor-pointer
                ${!message.incoming && 'left-1 text-gray-400'}
                ${message.incoming && 'right-1 text-gray-300'}
              `}>
                <IconCloudDownload color="black"/>
              </div>
            </>}
            {/* НАЖАТЬ НА КАРТЫНКУ */}
            {isImageModalOpen && (
              <div
                onClick={handleBackdropClick}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              >
                <div className="relative">
                  <img
                    src={attachment.link}
                    alt={attachment.link}
                    className="max-w-full max-h-screen rounded-lg"
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-0 right-3 text-white text-2xl"
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
            {/* ПДФ */}
            {attachment.contentType === 'application/pdf' && <>
              <div
                className="flex items-center gap-2"
              >
                <a
                  href={attachment.link}
                  target="_blank"
                  className='hover:text-blue-500'
                >
                  Скачать
                </a>
              </div>
              <div
              onClick={() => handleDownloadFile(attachment)}
              className={`
                absolute text-[8px] bottom-0 cursor-pointer
                ${!message.incoming && 'left-1 text-gray-400'}
                ${message.incoming && 'right-1 text-gray-300'}
              `}>
                <IconCloudDownload color="black"/>
              </div>
            </>}
            {/* АУДИО */}
            {attachment?.contentType?.includes('audio') && <>
              <Audio
                src={attachment.link}
              />
              <div
              onClick={() => handleDownloadFile(attachment)}
              className={`
                absolute text-[8px] bottom-0 cursor-pointer
                ${!message.incoming && 'left-1 text-gray-400'}
                ${message.incoming && 'right-1 text-gray-300'}
              `}>
                <IconCloudDownload color={!message.incoming ? "white" : "black"}/>
              </div>
            </>}
            {/* ГЕО */}
            {!attachment.contentType && <img
              src={`data:image/jpeg;base64,${attachment.thumb}`}
              alt={attachment.link}
              onClick={() => openGoogleMaps(attachment.lat, attachment.lon)}
              className='rounded-lg cursor-pointer'
            />}
            {/* ВИДЕО */}
            {attachment?.contentType?.includes('video') &&
              <video
                src={attachment.link}
                className='rounded-lg cursor-pointer'
                controls
            />}
          </Fragment>
        ))}
        <div className={`
          absolute text-[7px] bottom-0
          ${message.incoming && 'left-1 text-black'}
          ${!message.incoming && 'right-1 text-white'}
        `}>
          {message?.created_at}
        </div>
      </div>
      {isActive && ReactDOM.createPortal(renderContextMenu(), document.body)}
    </div>
  )
}

export default Message;
