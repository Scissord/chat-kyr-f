import { FC } from 'react'
import { motion, Variants } from 'framer-motion';
import { useNavigate } from '@hooks';
import { useSidebarUrls } from '@constants';

type OpenedSidebarMiddleProps = {
  variants: Variants;
};

const css = {
  middle: `
    flex flex-col gap-3 h-full w-full px-2
  `,
  icon: `
    flex items-center gap-3
    hover:rounded-lg p-2 cursor-pointer
    hover:bg-gray-100 hover:bg-opacity-50
  `,
  label: `
    text-[13px] select-none text-white
  `,
};

const OpenedSidebarMiddle: FC<OpenedSidebarMiddleProps> = ({ variants }) => {
  const navigate = useNavigate();
  const sidebarUrls = useSidebarUrls();

  return (
    <div className={css.middle}>
      {sidebarUrls.map((url, index) => (
        <motion.div
          key={index}
          onClick={() => navigate(url.path)}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 0.1 }}
          className={css.icon}
          whileTap={{ scale: 0.95 }}
        >
          {url.icon}
          <p className={css.label}>{url.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default OpenedSidebarMiddle