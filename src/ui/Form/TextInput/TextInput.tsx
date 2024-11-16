import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';
import { Path, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type FormTextInputProps<T extends FieldValues> = {
  value: Path<T>,
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

const css = {
  label: `
    input input-bordered flex
    items-center gap-2 w-full
  `,
  input: `
    grow w-full
  `,
  error: `
    text-red-500 mt-2
  `,
};

export const FormTextInput = <T extends FieldValues>({
  value,
  register,
  errors
}: FormTextInputProps<T>) => {
  const theme = useAppSelector(selectTheme);

  return (
    <>
      <label
        className={`
          ${css.label}
          ${theme === "light" ? "bg-white text-black" : "bg-dbg text-white"}
        `}
      >
        <input
          type="text"
          className={css.input}
          {...register(value)}
        />
      </label>
      {errors[value]?.message && (
        <div className={css.error}>
          {typeof errors[value]?.message === 'string' ? errors[value]?.message : 'Invalid input'}
        </div>
      )}
    </>
  );
};
