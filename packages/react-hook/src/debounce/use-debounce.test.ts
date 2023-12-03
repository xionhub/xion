import { act, render, renderHook } from '@testing-library/react';
import { useDebounce } from './use-debounce';
describe('test', () => {
  it('hi', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const { result } = renderHook(() => useDebounce(callback, 100));
    act(() => result.current());
    act(() => result.current());
    act(() => result.current());
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
