import { safeLocation } from './../../../util/src/safe-location/safe-location';
import { safeHistory } from './../../../util/src/safe-history/safe-history';
import { FunnelCore } from './funnel.core';

describe('funnel core', () => {
  it('core test', () => {
    expect(() => new FunnelCore({ safeHistory, safeLocation })).not.toThrow();
  });
});
