import { IOption } from "@interfaces";
import { StylesConfig } from "react-select";

export const getReactSelectStyles = (theme: string): StylesConfig<IOption, false> => ({
  control: (provided, state) => ({
    ...provided,
    backgroundColor: theme === "light" ? "white" : "#1D232A",
    color: theme === "light" ? "black" : "white",
    border: state.isFocused ? "1px solid transparent" : "1px solid #ccc",
    boxShadow: state.isFocused ? "none" : "none",
    "&:hover": {
      border: "1px solid #ccc",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: theme === "light" ? "white" : "#1D232A",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: theme === "light" ? "black" : "white",
  }),
});
