import { ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import { XION_STYLE } from '@xionhub/token';

const customTwMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: Object.keys(XION_STYLE.fontSize) }],
  },
});

export const cn = (...inputs: ClassValue[]) => {
  return customTwMerge(clsx(...inputs));
};
