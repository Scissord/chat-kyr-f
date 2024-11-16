import { IOption } from '@interfaces';
import { FC, ChangeEvent } from 'react';

interface ISelectProps {
  value: number;
  onChange: (val: string) => void;
  options: IOption[];
};

const css = {
  container: `
    select select-bordered bg-white
    dark:bg-dbg text-black max-w-xs
    text-black dark:text-white
  `,
};

export const Select: FC<ISelectProps> = (props) => {
  const { value, onChange, options } = props;

  return (
    <select
      value={value}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
      className={css.container}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={Number(option.value)}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select;
