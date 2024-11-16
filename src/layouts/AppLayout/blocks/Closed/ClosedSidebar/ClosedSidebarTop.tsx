import { FC } from 'react';

const css = {
  container: `
    flex items-center
    justify-center
  `,
  img: `
    select-none w-[80%]
  `,
};

const ClosedSidebarTop: FC = () => {
  return (
    <div className={css.container}>
      <img src='pics/logo.png' className={css.img} alt='logo'/>
    </div>
  )
}

export default ClosedSidebarTop