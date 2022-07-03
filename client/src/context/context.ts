import React from 'react';

const AppContext = React.createContext<any | null>(null);

export const Provider = AppContext.Provider;
export const Consumer = AppContext.Consumer;
