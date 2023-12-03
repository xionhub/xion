import { render, renderHook } from '@testing-library/react';
import { useDebounce } from './use-debounce';
describe('test', () => {
  it('hi', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebounce(callback, 100));

    expect(true).toBe(true);
  });
});
