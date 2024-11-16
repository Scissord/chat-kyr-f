import { FC } from "react";

type LoaderProps = {
  size?: string;
  className?: string;
};

const css = {
  container: `
    w-full flex items-center
    justify-center
  `,
  span: `
    loading loading-spinner
    text-secondary dark:text-primary
  `,
};

export const Loader: FC<LoaderProps> = (props) => {
  const { size, className } = props;
  return (
    <div className={`${css.container} ${className || ''}`}>
      <span className={`${css.span} ${size || 'loading-lg'}`} />
    </div>
  );
};
