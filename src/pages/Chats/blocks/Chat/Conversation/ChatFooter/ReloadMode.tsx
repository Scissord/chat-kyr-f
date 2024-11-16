import { useAppSelector } from "@hooks";
import { selectTheme } from "@store/reducers/themeSlice";
import { FC } from "react";

type RecordingModeProps = {
  handleDeleteRecord: () => void;
  audio: string;
  handleReloadRecord: () => void;
  handleSendMessage: () => void;
  isMessageSending: boolean;
  setMode: any;
};

const ReloadMode: FC<RecordingModeProps> = (props) => {
  const {
    handleDeleteRecord,
    audio, handleReloadRecord,
    handleSendMessage,
    isMessageSending, setMode
  } = props;
  const theme = useAppSelector(selectTheme);

  return (
    <div className='flex items-center justify-center gap-3 w-full h-full'>
      <div className='w-[5%] flex items-center justify-center pl-3 py-6'>
        <div onClick={() => handleDeleteRecord()} className='hover:bg-gray-200 rounded-md'>
          <svg
            fill="red"
            viewBox="0 0 16 16"
            height="1.2em"
            width="1.2em"
            cursor={"pointer"}
          >
            <path d="M6.5 1h3a.5.5 0 01.5.5v1H6v-1a.5.5 0 01.5-.5zM11 2.5v-1A1.5 1.5 0 009.5 0h-3A1.5 1.5 0 005 1.5v1H2.506a.58.58 0 00-.01 0H1.5a.5.5 0 000 1h.538l.853 10.66A2 2 0 004.885 16h6.23a2 2 0 001.994-1.84l.853-10.66h.538a.5.5 0 000-1h-.995a.59.59 0 00-.01 0H11zm1.958 1l-.846 10.58a1 1 0 01-.997.92h-6.23a1 1 0 01-.997-.92L3.042 3.5h9.916zm-7.487 1a.5.5 0 01.528.47l.5 8.5a.5.5 0 01-.998.06L5 5.03a.5.5 0 01.47-.53zm5.058 0a.5.5 0 01.47.53l-.5 8.5a.5.5 0 11-.998-.06l.5-8.5a.5.5 0 01.528-.47zM8 4.5a.5.5 0 01.5.5v8.5a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z" />
          </svg>
        </div>
      </div>
      <div className='w-[85%] flex items-center h-full'>
        {audio && <audio controls src={audio} className='w-full'/>}
      </div>
      <div className='w-[10%] flex items-center gap-2 py-6'>
        <div
          onClick={() => handleReloadRecord()}
          className='w-5 h-5 cursor-pointer hover:bg-gray-200 hover:rounded-md hover:font-bold'
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke={theme === 'dark' ? 'white' : 'black'}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 1a3 3 0 0 1 3 3v10a3 3 0 0 1-6 0V4a3 3 0 0 1 3-3z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="23"/>
            <line x1="8" y1="23" x2="16" y2="23"/>
          </svg>
        </div>
        <div
          onClick={() => {
            if(!isMessageSending) {
              setMode('default');
              handleSendMessage();
            };
          }}
          className='w-5 h-5 cursor-pointer hover:bg-gray-200 hover:rounded-md hover:font-bold'
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke={theme === 'dark' ? 'white' : 'black'}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22 11 13 2 9l20-7z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ReloadMode