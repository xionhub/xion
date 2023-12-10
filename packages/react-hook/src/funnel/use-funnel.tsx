'use client';
import React from 'react';
import {
  FunnelOptionObject,
  NonEmptyArray,
  RouteFunnelProps,
  StepProps,
} from './funnel.type';
import {
  RecursivePartial,
  mergeOptions,
  safeHistory,
  safeLocation,
  safeSearchParams,
} from '@xionhub/util';
import { FunnelCore } from './funnel.core';
import { Funnel, Step } from './funnel';

export const useFunnel = <Steps extends NonEmptyArray<string>>(
  array: Steps,
  userOptions: RecursivePartial<FunnelOptionObject<Steps>> = {},
) => {
  const { targetKey, initialStep } = mergeOptions(userOptions, {
    initialStep: array[0],
    targetKey: 'step',
  });
  const funnelCore = new FunnelCore({ safeHistory, safeLocation });
  const [steps, _] = React.useState<Steps>(array);
  const [currentStep, setCurrentStep] = React.useState<Steps[number]>(
    () => initialStep,
  );

  const nextStep = (nextQuery: Steps[number]) => {
    return () => {
      setCurrentStep(() => {
        const getSafeParam = safeSearchParams(targetKey);
        if (getSafeParam !== nextQuery) {
          funnelCore.pushNextStepState(targetKey, nextQuery);
        }
        return nextQuery;
      });
    };
  };

  React.useEffect(() => {
    const handlePopState = () => {
      const nowStep = safeSearchParams(targetKey) ?? '';
      setCurrentStep(nowStep);
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  React.useEffect(() => {
    funnelCore.replaceNextStepState(targetKey, initialStep);
  }, []);
  const FunnelComponent = React.useMemo(() => {
    // eslint-disable-next-line react/display-name
    return Object.assign(
      (props: RouteFunnelProps<Steps>) => {
        return <Funnel<Steps> step={currentStep} steps={steps} {...props} />;
      },
      {
        Step: (props: StepProps<Steps>) => {
          return <Step {...props} />;
        },
      },
    );
  }, [currentStep, steps]);
  return [FunnelComponent, nextStep] as const;
};
