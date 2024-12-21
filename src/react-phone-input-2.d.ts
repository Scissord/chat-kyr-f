declare module 'react-phone-input-2' {
  import React from 'react';

  export interface PhoneInputProps {
    value?: string;
    onChange?: (value: string, country: Record<string, any>, e: React.ChangeEvent<HTMLInputElement>) => void;
    country?: string;
    onlyCountries?: string[];
    preferredCountries?: string[];
    enableSearch?: boolean;
    disableDropdown?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    inputStyle?: React.CSSProperties;
    buttonStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    dropdownStyle?: React.CSSProperties;
    searchStyle?: React.CSSProperties;
  }

  const PhoneInput: React.FC<PhoneInputProps>;

  export default PhoneInput;
}
