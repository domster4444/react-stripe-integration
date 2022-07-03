//! Wrapper that provides data to all childrent wrapped by it.

import React, { useState } from 'react';
import { Provider } from './context';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

interface ITrackingState {
  isLoading: boolean;
  isError: boolean;
  data: LoggedInUserData | null;
}
interface LoggedInUserData {
  name: string;
  accountType: 'free' | 'premium';
}

const AuthProvider: React.FC<IProps> = ({ children }): React.ReactElement => {
  const [trackingState, setTrackingState] = useState<ITrackingState | null>(
    null
  );

  const [loggedInUserData, setLoggedInUserData] =
    useState<LoggedInUserData | null>(null);

  // fetch data using rtk query & manupulate data state.
  // or use custom hook that utilizes services to fetch data & manupulate data state

  //   getting state data ready to pass

  const authStates = {
    loggedInUserData,
    setLoggedInUserData,
    trackingState,
    setTrackingState,
  };

  return <Provider value={authStates}>{children}</Provider>;
};
