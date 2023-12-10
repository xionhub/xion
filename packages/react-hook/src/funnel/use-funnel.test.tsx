import { act, render, renderHook } from '@testing-library/react';
import { useFunnel } from './use-funnel';
import React from 'react';
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

  it('returns FunnelComponent and nextStep function', () => {
    const steps = ['first', 'second', 'third'] as const;

    const { result } = renderHook(() => useFunnel(steps));
    const [FunnelComponent, nextStep] = result.current;

    expect(FunnelComponent).toBeDefined();
    expect(nextStep).toBeDefined();
  });

  it('renders FunnelComponent with the correct step and steps prop', () => {
    const steps = ['first', 'second', 'third'] as const;
    const { result } = renderHook(() => useFunnel(steps));
    const [FunnelComponent] = result.current;

    render(
      <FunnelComponent>
        <FunnelComponent.Step name="first">
          <div className="">first</div>
        </FunnelComponent.Step>
        <FunnelComponent.Step name="second">
          <div className="">second</div>
        </FunnelComponent.Step>
        <FunnelComponent.Step name="third">
          <div className="">third</div>
        </FunnelComponent.Step>
      </FunnelComponent>,
    );
  });
});
