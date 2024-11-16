import { FC, useRef, useState } from 'react';
import { useChats } from '@context';
import DefaultMode from './ChatFooter/DefaultMode';
import ReloadMode from './ChatFooter/ReloadMode';
import RecordingMode from './ChatFooter/RecordingMode';

const ChatFooter: FC = () => {
  const {
    file,
    setFile,
    message,
    setMessage,
    audio,
    setAudio,
    setRAudio,
    handleSendMessage,
    isMessageSending
  } = useChats();
  const fileInputRef = useRef<HTMLInputElement>(null); // Тип для инпута файла

  const audioChunksRef = useRef<Blob[]>([]); // Храним аудио как массив Blob
  const audioContextRef = useRef<AudioContext | null>(null); // Типизация для AudioContext
  const dataArrayRef = useRef<Uint8Array | null>(null); // Типизация для массива аудио данных
  const analyserRef = useRef<AnalyserNode | null>(null); // AnalyserNode для аудио анализа
  const mediaRecorderRef = useRef<MediaRecorder | null>(null); // Типизация для MediaRecorder
  const animationRef = useRef<number | null>(null); // Типизация для анимации (requestAnimationFrame)

  const [mode, setMode] = useState<'default' | 'recording' | 'reload'>('default');
  const [volume, setVolume] = useState<number>(0);

  const startRecording = () => {
    setFile(null);

    // Проверяем поддержку getUserMedia
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('getUserMedia не поддерживается в этом браузере');
      return;
    }

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream: MediaStream) => {
        const audioContext = new (window.AudioContext)();
        audioContextRef.current = audioContext;

        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        analyserRef.current = analyser;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        dataArrayRef.current = dataArray;

        source.connect(analyser);

        let mimeType = '';
        if (MediaRecorder.isTypeSupported('audio/webm; codecs=opus')) {
          mimeType = 'audio/webm; codecs=opus';
        } else if (MediaRecorder.isTypeSupported('audio/ogg; codecs=opus')) {
          mimeType = 'audio/ogg; codecs=opus';
        } else if (MediaRecorder.isTypeSupported('audio/webm')) {
          mimeType = 'audio/webm';
        } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
          mimeType = 'audio/mp4';
        } else {
          console.error('Ни один из MIME-типов не поддерживается');
          return;
        }

        const options: MediaRecorderOptions = { mimeType }; // Правильный MIME-тип
        const mediaRecorder = new MediaRecorder(stream, options);
        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.start();

        const audioChunks: Blob[] = [];
        audioChunksRef.current = audioChunks;

        mediaRecorder.ondataavailable = (event: BlobEvent) => {
          audioChunks.push(event.data);
        };

        setMode('recording');

        mediaRecorder.onstop = async () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/ogg; codecs=opus' });
          const audioUrl = URL.createObjectURL(audioBlob);

          const audioFile = new File([audioBlob], 'recording.ogg', { type: 'audio/ogg; codecs=opus' });

          setAudio(audioUrl);
          setRAudio(audioFile);

          audioChunksRef.current = [];
          audioContext.close();

          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
        };

        animate();
      })
      .catch((error: DOMException) => {
        console.error('Ошибка при записи аудио:', error);
      });
  };


  const stopRecording = () => {
    setMode('reload');
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  const handleDeleteRecord = () => {
    setMode('default');
  };

  const handleReloadRecord = () => {
    setAudio("");
    setRAudio(null);
    startRecording();
    setMode('recording');
  };

  const animate = () => {
    if (analyserRef.current && dataArrayRef.current) {
      analyserRef.current.getByteFrequencyData(dataArrayRef.current);
      const maxVolume = Math.max(...dataArrayRef.current);
      setVolume(maxVolume);
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAudio("");
    setRAudio(null);
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setMessage('');
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className='flex items-center gap-2 border-t border-slate-300'>
      {mode === 'default' && (
        <DefaultMode
          fileInputRef={fileInputRef}
          handleFileChange={handleFileChange}
          file={file}
          setFile={setFile}
          message={message}
          setMessage={setMessage}
          handleSendMessage={handleSendMessage}
          startRecording={startRecording}
          isMessageSending={isMessageSending}
        />
      )}
      {mode === 'recording' && (
        <RecordingMode
          volume={volume}
          stopRecording={stopRecording}
          handleDeleteRecord={handleDeleteRecord}
        />
      )}
      {mode === 'reload' && (
        <ReloadMode
          handleDeleteRecord={handleDeleteRecord}
          audio={audio}
          handleReloadRecord={handleReloadRecord}
          handleSendMessage={handleSendMessage}
          isMessageSending={isMessageSending}
          setMode={setMode}
        />
      )}
    </div>
  );
};

export default ChatFooter;
