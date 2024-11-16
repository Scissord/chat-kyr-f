import { FC } from "react";
import ClosedSidebarTop from "./ClosedSidebar/ClosedSidebarTop";
import ClosedSidebarMiddle from "./ClosedSidebar/ClosedSidebarMiddle";
import ClosedSidebarBottom from "./ClosedSidebar/ClosedSidebarBottom";

const css = {
  container: `
    w-full h-full flex
    flex-col gap-6 py-4
    items-center overflow-hidden
  `,
};

const ClosedSidebar: FC = () => {
  return (
    <div className={css.container}>
      <ClosedSidebarTop/>
      <ClosedSidebarMiddle/>
      <ClosedSidebarBottom/>
    </div>
  );
};

export default ClosedSidebar;
