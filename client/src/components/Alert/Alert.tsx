import React from 'react';

import { AlertField } from './Alert.style';
import { AlertPropsI } from './interface';

const Alert: React.FC<AlertPropsI> = (props): React.ReactElement => {
  return <AlertField type={props.type}>{props.children}</AlertField>;
};

export default Alert;
