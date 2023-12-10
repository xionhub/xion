import * as clientModule from '../is-client/is-client';
import { safeSearchParams } from './safe-search-params';
describe('safeSearchParams', () => {
  it('returns null when not in a client environment', () => {
    jest.spyOn(clientModule, 'isClient').mockImplementation(() => false);
    expect(safeSearchParams('param')).toBeNull();
  });

  it('returns the search parameter value when in a client environment', () => {
    jest.spyOn(clientModule, 'isClient').mockImplementation(() => true);
    const location = {
      ...window.location,
      search: '?test=success',
    };
    Object.defineProperty(window, 'location', {
      writable: true,
      value: location,
    });
    expect(safeSearchParams('test')).toBe('success');
  });

  it('returns null for a non-existent search parameter when in a client environment', () => {
    jest.spyOn(clientModule, 'isClient').mockImplementation(() => true);
    expect(safeSearchParams('nonexistent')).toBeNull();
  });
});
