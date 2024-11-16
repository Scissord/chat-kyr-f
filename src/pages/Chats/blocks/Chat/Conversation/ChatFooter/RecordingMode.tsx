import { FC } from "react";
import { useAppSelector } from "@hooks";
import { selectTheme } from "@store/reducers/themeSlice";

type RecordingModeProps = {
  volume: number | string,
  handleDeleteRecord: () => void;
  stopRecording: () => void;
};

const RecordingMode: FC<RecordingModeProps> = (props) => {
  const { handleDeleteRecord, volume, stopRecording } = props;
  const theme = useAppSelector(selectTheme);

  return (
    <div className='flex items-center justify-center gap-3 w-full'>
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
      <div className='w-[85%] relative flex items-center h-full'>
        <div style={{
          width: '100%',
          height: '10px',
          background: 'gray',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${volume}%`,
            height: '100%',
            background: 'red',
            position: 'absolute',
            left: 0,
            transition: 'width 0.1s'
          }} />
        </div>
      </div>
      <div className='w-[10%] flex items-center justify-center py-6'>
        <div onClick={() => stopRecording()}  className='hover:bg-gray-200 rounded-md'>
          <svg
            viewBox="0 0 1024 1024"
            fill={theme === 'dark' ? 'white' : 'black'}
            height="1.4em"
            width="1.4em"
            cursor={"pointer"}
          >
            <path d="M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default RecordingMode