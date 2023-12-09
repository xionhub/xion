export const locationStub: Location = {
  ancestorOrigins: {
    length: 0,
    contains(string: string) {
      return true;
    },
    item(index: number) {
      return null;
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
