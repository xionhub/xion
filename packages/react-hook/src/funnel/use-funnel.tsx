import React from 'react';
import { FunnelOptionObject, NonEmptyArray } from './funnel.type';
import { RecursivePartial, mergeOptions } from '@xionhub/util';

export const useFunnel = <Steps extends NonEmptyArray<string>>(
  array: Steps,
  userOptions: RecursivePartial<FunnelOptionObject<Steps>> = {},
) => {
  const options = mergeOptions(userOptions, {
    initialStep: array[0],
    targetKey: 'step',
  });
};
