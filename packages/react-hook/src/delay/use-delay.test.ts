import { act, renderHook, waitFor } from '@testing-library/react';
import { useDelay } from './use-delay';
import React from 'react';

describe('test useDelay hook', () => {
  it('tuple first argument initial state should false', async () => {
    const { result } = renderHook(() => useDelay());
    expect(result.current[0]).toBe(false);
  });
  it('false -> true -> false', async () => {
    const { result } = renderHook(() => useDelay());
    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1](10);
    });
    expect(result.current[0]).toBe(true);
    await waitFor(() => expect(result.current[0]).toBe(false));
  });
  it('유효하지 않은 값을 넣으면 error', async () => {
    const { result } = renderHook(() => useDelay());
    expect(result.current[1](-1)).rejects.toThrow();
  });
});
