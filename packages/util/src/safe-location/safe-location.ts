import { locationStub } from '@xionhub/stub';
import { isClient } from '../is-client/is-client';

export const safeLocation = () => {
  if (!isClient()) return locationStub;
  return window.location;
};
