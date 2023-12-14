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
import { Funnel, Step } from './funnel';

export const useFunnel = <Steps extends NonEmptyArray<string>>(
  array: Steps,
  userOptions: RecursivePartial<FunnelOptionObject<Steps>> = {},
) => {
  const { targetKey, initialStep } = mergeOptions(userOptions, {
    initialStep: array[0],
    targetKey: 'step',
  });
  const [steps, _] = React.useState<Steps>(array);
  const [currentStep, setCurrentStep] = React.useState<Steps[number]>(
    () => initialStep,
  );
  const location = safeLocation();
  const history = safeHistory();
  const createNextStep = (queryKey: string, queryValue: string) => {
    const path = location.pathname;
    return `${path}?${queryKey}=${queryValue}`;
  };

  const nextStep = (nextQuery: Steps[number]) => {
    const getSafeParam = safeSearchParams(targetKey);
    const newPath = createNextStep(targetKey, nextQuery);
    setCurrentStep(() => {
      return nextQuery;
    });

    if (getSafeParam !== nextQuery) {
      history.pushState('', '', newPath);
    }
    
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
    const newPath = createNextStep(targetKey, initialStep);
    history.replaceState('', '', newPath);
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
