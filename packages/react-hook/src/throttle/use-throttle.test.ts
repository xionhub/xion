import { act, renderHook } from '@testing-library/react';
import { useThrottle } from './use-throttle';

describe('useThrottle hook', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should throttle the callback function', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useThrottle(callback, 2));

    act(() => {
      result.current('param1');
      result.current('param2');
      result.current('param3');
    });
    jest.advanceTimersByTime(1);

    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);

    expect(callback).toHaveBeenCalledWith('param1');
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
