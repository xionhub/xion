import React from 'react';

export const useDelay = () => {
  const [time, setTime] = React.useState(false);
  const delay = async (num: number) => {
    if (num < 0)
      throw new Error('delay function argument should not negatgive');

    setTime(true);
    await new Promise((resolve) => {
      setTimeout(resolve, num);
    });
    setTime(false);
  };
  return [time, delay] as const;
};
