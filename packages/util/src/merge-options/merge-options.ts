import { RecursivePartial } from '../types/recursive-partial';

export const mergeOptions = <DefaultOptions>(
  userOptions: RecursivePartial<DefaultOptions>,
  defaultOptions: DefaultOptions,
): DefaultOptions => {
  const mergedOptions = { ...defaultOptions };

  userOptions = userOptions || {};
  for (const key of Object.keys(userOptions) as (keyof DefaultOptions)[]) {
    const userValue = userOptions[key];
    const defaultValue = defaultOptions[key];

    if (
      userValue !== undefined &&
      typeof userValue === 'object' &&
      defaultValue !== undefined &&
      typeof defaultValue === 'object'
    ) {
      mergedOptions[key] = mergeOptions(userValue!, defaultValue);
    } else {
      //@ts-ignore
      mergedOptions[key] = userValue !== undefined ? userValue : defaultValue;
    }
  }

  return mergedOptions;
};
