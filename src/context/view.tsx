import { createContext, FC, ReactNode, useContext, useState } from "react";
import { Toaster, Modal } from "@components";
import { AppLayout, AuthLayout } from "@layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ModalContent {
  title: string;
  children: ReactNode;
};

interface ModalState extends ModalContent {
  id: string;
  show: boolean;
};

interface NotificationState {
  show: boolean;
  message: string;
  type: "info" | "success" | "warning" | "error";
};

interface ViewContextProps {
  notification: {
    show: (message: string, type: "info" | "success" | "warning" | "error") => void;
  };
  modal: {
    show: (content: ModalContent) => void;
    hide: () => void;
    data: ModalState;
  };
};

interface ViewProps {
  title: string;
  layout: 'app' | 'auth';
  display: FC;
};

const defaultNotification: NotificationState = {
  show: false,
  message: "",
  type: "success"
};

const defaultModal: ModalState = {
  id: 'my_modal',
  show: false,
  title: "",
  children: null
};

export const useViewContext = () => {
  return useContext(ViewContext);
};

export const ViewContext = createContext<ViewContextProps | null>(null);

export const View: FC<ViewProps> = ({ title, layout, display }) => {
  const [modal, setModal] = useState<ModalState>(defaultModal);
  const [notification, setNotification] = useState<NotificationState>(defaultNotification);

  const showNotification = (message: string, type: "info" | "success" | "warning" | "error") => {
    setNotification({ show: true, message, type });
    toast[type](`${message}`, {
      onClose: () => hideNotification(),
    })
  };

  const hideNotification = () => {
    setNotification(defaultNotification);
  };

  const showModal = (content: ModalContent) => {
    setModal({
      id: 'my_modal',
      show: true,
      title: content.title,
      children: content.children
    });
  };

  const hideModal = () => {
    setModal(defaultModal);
  };

  const data = {
    notification: {
      show: showNotification,
    },
    modal: {
      show: showModal,
      hide: hideModal,
      data: modal,
    },
  };

  const layouts = {
    app: AppLayout,
    auth: AuthLayout,
  };

  document.title = title

  let Layout = layout ? layouts[layout] : AppLayout

  if (!display) return null

  return (
    <ViewContext.Provider value={{ ...data }}>
      {notification.show && <Toaster />}
      {modal.show && <Modal {...modal} />}

      <Layout>
        {display}
      </Layout>
    </ViewContext.Provider>
  )
}
