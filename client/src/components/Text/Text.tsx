import React from 'react';

import { TextField } from './Text.style';

import { TextPropsI } from './interface';
const Text: React.FC<TextPropsI> = ({ children, ...rest }) => {
  return (
    <TextField className="poppins_regular" {...rest}>
      {children}
    </TextField>
  );
};

export default Text;
