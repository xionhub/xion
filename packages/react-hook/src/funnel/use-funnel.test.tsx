import { render, renderHook, screen } from '@testing-library/react';
import { useFunnel } from './use-funnel';
import userEvent from '@testing-library/user-event';
import React from 'react';
describe('use-funnel', () => {
  const steps = ['first', 'second', 'third'] as const;

  it('renders FunnelComponent with the correct step and steps prop', () => {
    const { result } = renderHook(() => useFunnel(steps));
    const [FunnelComponent] = result.current;

    render(
      <FunnelComponent>
        <FunnelComponent.Step name="first">
          <div className="" data-testid={'first-step'}>
            first
          </div>
        </FunnelComponent.Step>
        <FunnelComponent.Step name="second">
          <div className="" data-testid={'seciond-step'}>
            second
          </div>
        </FunnelComponent.Step>
        <FunnelComponent.Step name="third">
          <div className="" data-testid={'third-step'}>
            third
          </div>
        </FunnelComponent.Step>
      </FunnelComponent>,
    );
    expect(screen.getByTestId('first-step')).toBeInTheDocument();
  });

  it('renders FunnelComponent with the correct step and steps prop', async () => {
    const user = userEvent.setup();
    const { result } = renderHook(() => useFunnel(steps));
    const [FunnelComponent, setStep] = result.current;

    render(
      <FunnelComponent>
        <FunnelComponent.Step name="first">
          <div
            className=""
            data-testid={'first-step'}
            onClick={() => setStep('second')}
          >
            first
          </div>
        </FunnelComponent.Step>
        <FunnelComponent.Step name="second">
          <div
            className=""
            data-testid={'seciond-step'}
            onClick={() => setStep('third')}
          >
            second
          </div>
        </FunnelComponent.Step>
        <FunnelComponent.Step name="third">
          <div
            className=""
            data-testid={'third-step'}
            onClick={() => setStep('first')}
          >
            third
          </div>
        </FunnelComponent.Step>
      </FunnelComponent>,
    );
    const firstStep = screen.getByTestId('first-step');
    console.log('클릭이전', window.location.href);
    expect(window.location.search.includes('first')).toBe(true);
    await user.click(firstStep);
    expect(window.location.search.includes('first')).toBe(false);
    expect(window.location.search.includes('second')).toBe(true);
  });
});
