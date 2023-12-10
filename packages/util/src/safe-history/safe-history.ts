import { isClient } from '../is-client/is-client';
import { HistorySalt } from '../types/history-salt';
export type SaltedHistory = History & HistorySalt;
const historyStub: SaltedHistory = {
  length: 0,
  scrollRestoration: 'auto',
  state: undefined,
  back: () => {},
  forward: () => {},
  go: () => {},
  pushState: () => {},
  replaceState: () => {},
  isReady: false,
  isStub: true,
};
const saltedHistoryStub = Object.assign(historyStub, {
  isReady: false,
  isStub: true,
});

export const safeHistory = (): SaltedHistory => {
  if (!isClient()) return saltedHistoryStub;
  const customHistory: SaltedHistory = Object.assign(window.history, {
    isReady: true,
    isStub: false,
  });
  return customHistory;
};
