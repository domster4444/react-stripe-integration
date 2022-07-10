import React from 'react';
import { InputPropsI } from './interface';
import { InputField } from './Input.style';
const Input: React.FC<InputPropsI> = ({
  elementSize,
  type,
  id,
  name,
  placeholder,
  value,
  disabled,
  onChange,
  //rest parameter
  ...rest
}) => {
  return (
    <InputField
      className="poppins_regular"
      scalestyle="large"
      placeholder={placeholder ? placeholder : undefined}
      type={type ? type : 'text'}
      name={name ? name : undefined}
      value={value ? value : undefined}
      onChange={onChange ? onChange : undefined}
      disabled={disabled ? disabled : undefined}
      {...rest}
    />
  );
};

export default Input;
