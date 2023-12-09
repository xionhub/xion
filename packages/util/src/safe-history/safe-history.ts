import { historyStub } from '@xionhub/stub/src';
import { isClient } from '../is-client/is-client';

type SaltedHistory = History & HistorySalt;

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
