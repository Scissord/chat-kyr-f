import { FC, RefObject } from "react";
import OpenedSidebarTop from "./OpenedSidebar/OpenedSidebarTop";
import OpenedSidebarMiddle from "./OpenedSidebar/OpenedSidebarMiddle";
import OpenedSidebarBottom from "./OpenedSidebar/OpenedSidebarBottom";

type OpenedSidebarProps = {
  menuOpenedButtonRef: RefObject<HTMLDivElement>;
  toggleMenu: () => void;
};

const css = {
  container: `
    w-full h-full flex flex-col gap-3
    items-center py-4 overflow-hidden
  `,
};

const variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const OpenSidebar: FC<OpenedSidebarProps> = (props) => {
  const { menuOpenedButtonRef, toggleMenu } = props;

  return (
    <div className={css.container}>
      <OpenedSidebarTop variants={variants}/>
      <OpenedSidebarMiddle variants={variants}/>
      <OpenedSidebarBottom
        variants={variants}
        toggleMenu={() => toggleMenu()}
        menuOpenedButtonRef={menuOpenedButtonRef}
      />
    </div>
  );
};

export default OpenSidebar
