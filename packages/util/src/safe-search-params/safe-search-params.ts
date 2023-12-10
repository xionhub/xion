import { isClient } from '../is-client/is-client';

export const safeSearchParams = (param: string) => {
  if (!isClient()) return null;
  const queryParam = new URLSearchParams(window.location.search);
  const myparam = queryParam.get(param);
  return myparam;
};
