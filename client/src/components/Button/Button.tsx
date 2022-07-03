import React from 'react';

import { PrimaryBtn } from './Button.style';

interface ButtonI {
  children: string;
}

/**
 * PrimaryButton is a function that takes in a children prop and returns a styled button with the
 * children prop as the button's text.
 * @param {ButtonI}  - ButtonI = {
 * @returns A function that returns a component.
 */
export const PrimaryButton = ({ children }: ButtonI) => {
  return (
    <PrimaryBtn type="submit" primary className="poppins_regular">
      {children}
    </PrimaryBtn>
  );
};
