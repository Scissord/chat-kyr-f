import { FC, ReactNode, useCallback, useContext, useEffect } from 'react'
import { ViewContext } from '@context';
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';

type ModalProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export const Modal: FC<ModalProps> = ({ id, title, children }) => {
  const context = useContext(ViewContext);
  const theme = useAppSelector(selectTheme);

  const closeModal = useCallback(() => {
    const modal = document.getElementById(id) as HTMLDialogElement | null;
    if (modal) {
      context?.modal.hide();
    };
  }, [id]);

  useEffect(() => {
    const modal = document.getElementById(id) as HTMLDialogElement | null;
    if(modal) {
      modal.showModal()
    };
  }, [id]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    // Добавляем обработчик события нажатия клавиши `Esc`
    document.addEventListener('keydown', handleEsc);

    // Очистка обработчика события при размонтировании
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [closeModal]);

  return (
    <dialog id={id} className="modal" style={{ overflow: 'visible' }} >
      <div
        className={`
          modal-box
          ${theme === 'dark' ? 'bg-indigo-950' : 'bg-white'}
        `}
        style={{ overflow: 'visible' }}
      >
        <form method="dialog">
          <button
            onClick={() => context?.modal.hide()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            // tabIndex={-1}
          >
            ✕
          </button>
        </form>
        <h3
          className={`
            font-bold text-lg mb-6
            ${theme === 'dark' ? 'text-white' : 'text-black'}
          `}
        >
          {title}
        </h3>
        {children}
      </div>
    </dialog>
  )
}
