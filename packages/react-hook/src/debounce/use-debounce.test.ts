import { act, renderHook } from '@testing-library/react';
import { useDebounce } from './use-debounce';
describe('test use-debounce hook', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('it should be called only one time with last argument', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebounce(callback, 2));
    act(() => {
      result.current('param1');
      result.current('param2');
      result.current('param3');
    });
    jest.advanceTimersByTime(2);
    expect(callback).toHaveBeenCalledWith('param3');
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('it should not call callback when time before', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebounce(callback, 2));
    act(() => result.current('param1'));
    jest.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(2);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
