import React from 'react';
import { Link } from 'react-router-dom';

import { PrimaryBtn } from './Button.style';

interface ButtonI {
  children: string;
  path?: string;
  onClickProps?: () => void;
  [key: string]: any;
}

/**
 * PrimaryButton is a function that takes in a children prop and returns a styled button with the
 * children prop as the button's text.
 * @param {ButtonI}  - ButtonI = {
 * @returns A function that returns a component.
 */
export const PrimaryButton = ({
  children,
  path,
  onClickProps,
  ...rest
}: ButtonI) => {
  if (path !== undefined) {
    return (
      <Link to={path}>
        <PrimaryBtn>{children}</PrimaryBtn>;
      </Link>
    );
  }
  return (
    <PrimaryBtn
      type="submit"
      primary
      className="poppins_regular"
      onClick={onClickProps ? onClickProps : undefined}
      {...rest}
    >
      {children}
    </PrimaryBtn>
  );
};
