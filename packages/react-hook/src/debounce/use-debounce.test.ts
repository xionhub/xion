import { act, render, renderHook } from '@testing-library/react';
import { useDebounce } from './use-debounce';
describe('test use-debounce hook', () => {
  it('it should be called only one time with last argument', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const { result } = renderHook(() => useDebounce(callback, 100));
    act(() => result.current('param1'));
    act(() => result.current('param2'));
    act(() => result.current('param3'));
    jest.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledWith('param3');
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
