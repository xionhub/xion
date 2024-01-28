import React from 'react';

export const useLoading = () => {
  const [loading, setLoading] = React.useState(false);
  const loadingWrapper = async <Return>(
    callback: () => Return,
  ): Promise<Return> => {
    const result = callback();
    if (result instanceof Promise) {
      setLoading(true);
      await result;
      setLoading(false);
    }
    return result;
  };
  return [loading, loadingWrapper] as const;
};
