import { FC } from 'react';

interface IButtonProps {
  label: string;
  onChange: () => void;
  className?: string;
};

const css = {
  container: `
    btn btn-active btn-secondary
    text-white dark:btn-primary
    dark:text-white hover:opacity-80
  `,
};

export const Button: FC<IButtonProps> = (props) => {
  const { label, onChange, className } = props;

  return (
    <button
      onClick={() => onChange()}
      className={css.container + " " + className}
    >
      {label}
    </button>
  )
}

export default Button;
