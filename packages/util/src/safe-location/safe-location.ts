import { isClient } from '../is-client/is-client';
export const locationStub: Location = {
  ancestorOrigins: {
    length: 0,
    contains(string: string) {
      return true;
    },
    item(index: number) {
      return null;
    },
    [Symbol.iterator]: function (): IterableIterator<string> {
      throw new Error('Function not implemented.');
    },
  },
  hash: '',
  host: '',
  hostname: '',
  href: '',
  origin: '',
  pathname: '',
  port: '',
  protocol: '',
  search: '',
  assign: () => {},
  reload: () => {},
  replace: () => {},
};
export const safeLocation = () => {
  if (!isClient()) return locationStub;
  return window.location;
};
