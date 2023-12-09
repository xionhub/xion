import { safeHistory } from './safe-history';
import * as clientModule from '../is-client/is-client';

describe('safehistory', () => {
  it('if client -> isStub false', () => {
    jest.spyOn(clientModule, 'isClient').mockImplementation(() => true);
    const history = safeHistory();
    expect(history.isReady).toBe(true);
    expect(history.isStub).toBe(false);
    jest.restoreAllMocks();
  });
  it('if Server -> isStub true', () => {
    jest.spyOn(clientModule, 'isClient').mockImplementation(() => false);
    const history = safeHistory();
    expect(history.isReady).toBe(false);
    expect(history.isStub).toBe(true);
    jest.restoreAllMocks();
  });
});
