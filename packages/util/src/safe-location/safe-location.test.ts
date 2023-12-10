import * as clientModule from '../is-client/is-client';
import { locationStub } from '@xionhub/stub';
import { safeLocation } from './safe-location';
describe('safehistory', () => {
  it('if client -> isStub false', () => {
    jest.spyOn(clientModule, 'isClient').mockImplementation(() => true);
    expect(safeLocation()).toBe(window.location);
    jest.restoreAllMocks();
  });
  it('if Server -> isStub true', () => {
    jest.spyOn(clientModule, 'isClient').mockImplementation(() => false);
    expect(safeLocation()).toBe(locationStub);
    jest.restoreAllMocks();
  });
});
