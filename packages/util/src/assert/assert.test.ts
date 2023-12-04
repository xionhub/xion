import { assert } from './assert';
class CustomError extends Error {
  constructor(text: string) {
    super(text);
  }
}

describe('assert', () => {
  it('컨디션이 트루시하다면 error를 던지지 않습니다.', () => {
    const hi: null | 'test' = 'test';
    assert(hi !== null, 'error');
    expect(() => assert(hi !== null, 'error')).not.toThrow();
  });

  it('컨디션이 falsy 하다면 error를 던집니다.', () => {
    expect(() => assert(false)).toThrow();
  });
  it('두번째 매개변수가 스트링인 경우 해당 스트링을 에러객체로 래핑해서 던집니다.', () => {
    expect(() => assert(false, 'error')).toThrow('error');
  });
  it('두번째 매개변수가 에러 객체인 경우 그 에러를 던집니다.', () => {
    expect(() => assert(false, new Error('hi'))).toThrow('hi');
    expect(() => assert(false, new Error('hi'))).toThrow(Error);
  });

  it('커스텀 에러도 던질 수 있습니다.', () => {
    expect(() => assert(false, new CustomError('hi'))).toThrow('hi');
    expect(() => assert(false, new CustomError('hi'))).toThrow(Error);
    expect(() => assert(false, new CustomError('hi'))).toThrow(CustomError);
  });
});
