import React from 'react';

export const useFilter = (filter: string) => {
  const [filterValue, setFilterValue] = React.useState(filter);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  return {
    filterValue,
    handleFilterChange,
  };
};
