import { URLSearchParamsStub } from '../url-search-params/url-search-params-stub';

export class URLStub implements URL {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  searchParams: URLSearchParams;
  username: string;
  constructor(url: string, base?: string | URL) {
    this.hash = '';
    this.host = '';
    this.hostname = '';
    (this.href = ''), (this.origin = '');
    this.password = '';
    this.pathname = '';
    this.port = '';
    this.protocol = '';
    this.search = '';
    this.username = '';
    this.searchParams = new URLSearchParamsStub();
  }

  toString(): string {
    return '';
  }

  toJSON(): string {
    return '';
  }
}
