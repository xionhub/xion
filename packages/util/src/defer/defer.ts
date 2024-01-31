import { delay } from '../delay/delay';

export const defer =
  <T>(callback: () => Promise<T>, ms: number) =>
  async () => {
    const result = await Promise.all([callback(), delay(ms)]);
    return result[0];
  };
