import React from 'react';

import { PrimaryBtn } from './Button.style';

interface ButtonI {
  children: string;
}

export const PrimaryButton = ({ children }: ButtonI) => {
  return (
    <PrimaryBtn type="submit" primary className="poppins_regular">
      {children}
    </PrimaryBtn>
  );
};
