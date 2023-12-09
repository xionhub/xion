export const isClient = () => {
  return typeof window !== 'undefined' && typeof global === 'undefined';
};
