import { assertType } from './assert-type';

describe('assert type 유틸함수를 테스트합니다.', () => {
  it('boolean을 반환합니다.', () => {
    expect(typeof assertType('hi') === 'boolean').toBe(true);
  });
});
