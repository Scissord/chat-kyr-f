import { FC } from 'react';
import { useSidebarUrls } from '@constants';

const css = {
  middle: `
    flex flex-col gap-3 h-full
  `,
  icon: `
    flex items-center justify-center
    hover:rounded-lg p-2 cursor-pointer
    hover:bg-gray-200 dark:hover:bg-gray-700
    transition-transform duration-200
    ease-in-out transform active:scale-95
  `
};

const ClosedSidebarMiddle: FC = () => {
  const sidebarUrls = useSidebarUrls();

  return (
    <div className={css.middle}>
      {sidebarUrls.map((url) => (
        <div
          key={url.path}
          className={css.icon}
        >
          {url.icon}
        </div>
      ))}
    </div>
  )
}

export default ClosedSidebarMiddle