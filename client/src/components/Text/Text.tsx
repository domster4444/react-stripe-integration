import React from 'react';

import { TextField } from './Text.style';

import { TextPropsI } from './interface';
const Text: React.FC<TextPropsI> = ({ children }) => {
  return <TextField className="poppins_regular">{children}</TextField>;
};

export default Text;
