import shallowEqual from './shallow-equal';

describe('shallow-equal', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns true for equal objects', () => {
    const objA = { a: 1, b: 2 };
    const objB = { a: 1, b: 2 };

    const result = shallowEqual(objA, objB);

    expect(result).toBe(true);
  });

  it('returns false for different types', () => {
    const objA = { a: 1, b: 2 };
    const objB = 'string';

    const result = shallowEqual(objA, objB);

    expect(result).toBe(false);
  });

  it('returns false for objects with different lengths', () => {
    const objA = { a: 1, b: 2 };
    const objB = { a: 1, b: 2, c: 3 };

    const result = shallowEqual(objA, objB);

    expect(result).toBe(false);
  });

  it('returns false for objects with different values', () => {
    const objA = { a: 1, b: 2 };
    const objB = { a: 1, b: 3 };

    const result = shallowEqual(objA, objB);

    expect(result).toBe(false);
  });

  it('returns false for objects with different keys', () => {
    const objA = { a: 1, b: 2 };
    const objB = { a: 1, c: 2 };

    const result = shallowEqual(objA, objB);

    expect(result).toBe(false);
  });

  it('returns false for null or non-object values', () => {
    const objA = { a: 1, b: 2 };
    const objB = null;

    const result = shallowEqual(objA, objB);

    expect(result).toBe(false);
  });
});
