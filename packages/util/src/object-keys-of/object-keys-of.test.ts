import { objectKeysOf } from './object-keys-of';
describe('object-keys-of', () => {
  it('타입을 적절히 추론할 수 있습니다.', () => {
    const obj = {
      hi: 'test',
      bye: 'test',
    };
    const objkeys = objectKeysOf(obj);
    expect(Array.isArray(objkeys)).toBe(true);
  });
  it('배열이 전달된 경우 인덱스를 담습니다.', () => {
    const arrayObj = ['hi', 'he'];
    //@ts-expect-error
    const arrayCase = objectKeysOf(arrayObj);
    expect(arrayCase[0]).toBe('0');
    expect(arrayCase[1]).toBe('1');
  });
  it('문자열 역시 인덱스가 담깁니다. ', () => {
    const stringObj = 'hi';
    //@ts-expect-error
    const stringCase = objectKeysOf(stringObj);
    expect(stringCase[0]).toBe('0');
    expect(stringCase[1]).toBe('1');
  });
});
