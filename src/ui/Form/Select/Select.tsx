import { useAppSelector } from '@hooks';
import { IOption } from '@interfaces';
import { selectTheme } from '@store/reducers/themeSlice';
import { Path, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type FormSelectProps<T extends FieldValues> = {
  data: IOption[];
  value: Path<T>,
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  isLoading?: boolean;
};

const css = {
  select: `
    text-black select
    select-bordered w-full
    max-w-xs
  `,
  error: `
    text-red-500 mt-2
  `,
};

export const FormSelect = <T extends FieldValues>({
  data,
  value,
  register,
  errors,
  isLoading
}: FormSelectProps<T>) => {
  const theme = useAppSelector(selectTheme);

  return (
    <>
      <select
        className={`
          ${css.select}
          ${theme === "light" ? "bg-white text-black" : "bg-dbg text-white"}
        `}
        disabled={isLoading}
        {...register(value)}
      >
        <>
          {data?.map((item: IOption) => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </>
      </select>
      {errors[value]?.message && (
        <div className={css.error}>
          {typeof errors[value]?.message === 'string' ? errors[value]?.message : 'Invalid input'}
        </div>
      )}
    </>
  );
};
