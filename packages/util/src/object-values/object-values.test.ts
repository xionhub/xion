import { objectValues } from './index';
describe('object-values', () => {
  it('잘 변환하는지 테스트합니다.', () => {
    const example = {
      hi: 'hi',
      bool: false,
      nested: {
        bye: 'bye',
      },
    };

    const valuesArray = objectValues(example);
    expect(Array.isArray(valuesArray)).toBe(true);
  });
});
