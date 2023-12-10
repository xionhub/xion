import { act, renderHook } from '@testing-library/react';
import { useFunnel } from './use-funnel';
describe('use-funnel', () => {
  it('setStep is working', () => {
    const { result } = renderHook(() => useFunnel(['hi', 'hello'] as const));
    const setStep = result.current[1];

    expect(window.location.search).toBe('?step=hi');
    act(() => setStep('hello')());
    expect(window.location.search).toBe('?step=hello');
    act(() => setStep('hi')());
    expect(window.location.search).toBe('?step=hi');
  });

  it('initial step working?', () => {
    const { result } = renderHook(() =>
      useFunnel(['hi', 'hello'] as const, { initialStep: 'hello' }),
    );
    expect(window.location.search).toBe('?step=hello');
  });
  it('targetKey working?', () => {
    const { result } = renderHook(() =>
      useFunnel(['hi', 'hello'] as const, { targetKey: 'yes' }),
    );
    expect(window.location.search).toBe('?yes=hi');
  });
});
