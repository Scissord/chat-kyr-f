import { useState, useEffect, FC } from "react";
import { default as RSS } from "react-select-search";
import './SelectSearch.css'

type SelectSearchOption = {
  name: string;
  value: string;
};

type SelectSearchProps = {
  id?: string;
  array: any[];
  value: string | string[] | undefined;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  onChange: (id: any, user: any) => void;
};

const css = {
  wrapper: "select-type-1 relative",
  icon: "absolute right-1.5 top-2 hover:text-slate-400 cursor-pointer text-slate-500 z-10",
};

export const SelectSearch: FC<SelectSearchProps> = (props) => {
  const {
    id, array, value,
    placeholder, onChange,
    className, disabled,
  } = props;

  const [options, setOptions] = useState<SelectSearchOption[]>([])

  useEffect(() => {
    let arr = array ?? []

    arr.forEach((option) => {
      option.value = option[id ?? "id"]
    })

    setOptions([...arr])
  }, [array])

  return (
    <div
    className={
      `${css.wrapper} ${className ?? ""} ${disabled ? "pointer-events-none opacity-60" : ""}`
    }
    >
      <RSS
        options={options ?? []}
        value={value}
        placeholder={placeholder ?? "Поиск..."}
        search={true}
        onChange={onChange}
        disabled={disabled}
      />

    </div>
  )
}