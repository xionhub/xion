import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Funnel, Step } from './funnel';
import { FunnelProps } from './funnel.type';

describe('Funnel Component', () => {
  const steps: ['first', 'second', 'third'] = ['first', 'second', 'third'];

  it('step 프로퍼티를 기반으로 올바른 단계를 렌더링합니다', () => {
    const StepComponent = ({ name }: { name: string }) => (
      <div data-testid={`step-${name}`}>{name}</div>
    );
    const funnelProps: FunnelProps<typeof steps> = {
      step: 'second',
      steps,
      children: <StepComponent name="second" />,
    };

    render(<Funnel {...funnelProps} />);

    expect(screen.getByTestId('step-second')).toBeInTheDocument();
  });

  it("'steps' 프로퍼티에 없는 단계는 렌더링되지 않습니다", () => {
    const StepComponent = ({ name }: { name: string }) => (
      <div data-testid={`step-${name}`}>{name}</div>
    );
    const funnelProps: FunnelProps<typeof steps> = {
      //@ts-expect-error
      step: 'hi',
      steps: steps,
      children: <StepComponent name="third" />,
    };

    render(<Funnel {...funnelProps} />);

    expect(screen.queryByTestId('step-third')).toBeNull();
  });

  it('여러 단계를 가진 경우에도 올바른 단계를 렌더링합니다', () => {
    const StepComponent = ({ name }: { name: string }) => (
      <div data-testid={`step-${name}`}>{name}</div>
    );
    const funnelProps: FunnelProps<typeof steps> = {
      step: 'second',
      steps,
      children: [
        <StepComponent key="first" name="first" />,
        <StepComponent key="second" name="second" />,
        <StepComponent key="third" name="third" />,
      ],
    };

    // Act
    render(<Funnel {...funnelProps} />);

    // Assert
    expect(screen.getByTestId('step-second')).toBeInTheDocument();
  });
});

describe('Step Component', () => {
  it('자식 컴포넌트를 렌더링합니다', () => {
    const ChildComponent = () => <div data-testid="child">Child Component</div>;

    render(<Step name="test-step">{<ChildComponent />}</Step>);

    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});
