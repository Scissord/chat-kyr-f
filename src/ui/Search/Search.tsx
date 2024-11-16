import { useCallback, useState } from 'react';
import { Loader } from '@ui';
import debounce from 'lodash/debounce';
import SearchIcon from './SearchIcon';

type Props = {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  loading: boolean;
  className?: string;
};

const css = {
  container: `
    relative flex items-center
    justify-between w-full
  `,
  input: `
    p-2 outline-none grow
  `,
  rightIcon: `
    absolute right-5
  `,
};

export const Search = (props: Props) => {
  const [inputValue, setInputValue] = useState<string>(props.value);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      props.setValue(value);
    }, 1000),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputValue(text);
    debouncedSearch(text);
  };

  return (
    <label className={css.container}>
      <input
        type="text"
        className={css.input + ' ' + props.className}
        value={inputValue}
        placeholder={props.placeholder ?? 'Поиск'}
        onChange={handleChange}
      />
      <div className={css.rightIcon}>
        {props.loading ? (
          <Loader />
        ) : (
          <SearchIcon />
        )}
      </div>
    </label>
  );
};
