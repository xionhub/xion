const colors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'tranparent',
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  white: {
    DEFAULT: 'hsl(var(--white))',
  },
  neutral: {
    '50': '#000000ff',
    '100': '#1c1b1fff',
    '200': '#313033ff',
    '300': '#484649ff',
    '400': '#605d62ff',
    '500': '#787579ff',
    '600': '#939094ff',
    '700': '#aeaaaeff',
    '800': '#c9c5caff',
    '900': '#e6e1e5ff',
    '950': '#f4eff4ff',
  },

  gray: {
    '50': 'oklch(97.59% 0.00 264.54)',
    '100': 'oklch(94.87% 0.01 264.53)',
    '200': 'oklch(88.64% 0.01 258.35)',
    '300': 'oklch(78.54% 0.03 257.66)',
    '400': 'oklch(66.43% 0.04 256.00)',
    '500': 'oklch(56.71% 0.05 256.31)',
    '600': 'oklch(48.56% 0.04 259.21)',
    '700': 'oklch(43.63% 0.04 260.85)',
    '800': 'oklch(38.05% 0.03 259.74)',
    '900': 'oklch(34.99% 0.02 258.37)',
    '950': 'oklch(26.85% 0.02 266.30)',
  },
  negative: {
    '50': 'oklch(97.30% 0.01 28.86)',
    '100': 'oklch(94.19% 0.03 28.12)',
    '200': 'oklch(89.21% 0.06 27.69)',
    '300': 'oklch(82.01% 0.10 27.67)',
    '400': 'oklch(70.98% 0.18 30.08)',
    '500': 'oklch(66.45% 0.21 30.93)',
    '600': 'oklch(60.30% 0.21 31.16)',
    '700': 'oklch(52.86% 0.19 31.19)',
    '800': 'oklch(46.45% 0.16 31.20)',
    '900': 'oklch(41.31% 0.13 30.97)',
    '950': 'oklch(26.90% 0.09 31.35)',
  },
  primary: {
    '50': 'oklch(96.58% 0.02 262.75)',
    '100': 'oklch(92.09% 0.04 265.84)',
    '200': 'oklch(86.25% 0.07 264.54)',
    '300': 'oklch(77.58% 0.11 261.99)',
    '400': 'oklch(66.54% 0.18 263.45)',
    '500': 'oklch(57.26% 0.23 265.28)',
    '600': 'oklch(49.86% 0.26 265.53)',
    '700': 'oklch(44.82% 0.26 265.71)',
    '800': 'oklch(38.88% 0.22 267.11)',
    '900': 'oklch(34.71% 0.17 268.45)',
    '950': 'oklch(25.91% 0.11 271.90)',
  },

  color: {
    'border-default': 'oklch(44.82% 0.26 265.71)', // primary 700
    'border-danger': 'oklch(52.86% 0.19 31.19)', // negative 700
    'border-soft': 'oklch(66.54% 0.18 263.45)',
  },
} as const;

const borderRadius = {
  xs: 'var(--radius)',
  sm: 'calc(var(--radius) * 2)',
  md: 'calc(var(--radius) * 3)',
  lg: 'calc(var(--radius) * 4)',
  xl: 'calc(var(--radius) * 6)',
  '2xl': 'calc(var(--radius) * 8)',
  '3xl': 'calc(var(--radius) * 10)',
  full: '999px',
} as const;

const spacing = {
  '0': '0px',
  '2': 'var(--spacing)',
  '4': 'calc(var(--spacing) * 2)',
  '6': 'calc(var(--spacing) * 3)',
  '8': 'calc(var(--spacing) * 4)',
  '12': 'calc(var(--spacing) * 6)',
  '16': 'calc(var(--spacing) * 8)',
  '24': 'calc(var(--spacing) * 12)',
  '32': 'calc(var(--spacing) * 16)',
  '48': 'calc(var(--spacing) * 24)',
  '64': 'calc(var(--spacing) * 32)',
  '128': 'calc(var(--spacing) * 64)',
  '256': 'calc(var(--spacing) * 128)',
  '512': 'calc(var(--spacing) * 256)',
  '1024': 'calc(var(--spacing) * 512)',
  '1/3': '33.3%',
  half: '50%',
  full: '100%',
} as const;

const fontSize = {
  'header-1': 'calc(var(--font-size) * 2.5)',
  'header-2': 'calc(var(--font-size) * 2.25)',
  'header-3': 'calc(var(--font-size) * 2)',
  'sub-title-1': 'calc(var(--font-size) * 1.875)',
  'sub-title-2': 'calc(var(--font-size) * 1.75)',
  'sub-title-3': 'calc(var(--font-size) * 1.625)',
  'sub-title-4': 'calc(var(--font-size) * 1.5)',
  'body-1': 'calc(var(--font-size) * 1.5)',
  'body-2': 'calc(var(--font-size) * 1.375)',
  'body-3': 'calc(var(--font-size) * 1.25)',
  'body-4': 'calc(var(--font-size) * 1)',
  'caption-1': 'calc(var(--font-size) * 0.875)',
  'caption-2': 'calc(var(--font-size) * 0.75)',
} as const;

const fontWeight = {
  'header-1': '700',
  'header-2': '700',
  'header-3': '700',
  'header-4': '700',
  'sub-title-1': '600',
  'sub-title-2': '600',
  'sub-title-3': '600',
  'sub-title-4': '600',
  'body-1': '500',
  'body-2': '500',
  'body-3': '500',
  'body-4': '500',
  'caption-1': '500',
  'caption-2': '400',
} as const;

const lineHeight = {
  'header-1': '128%',
  'header-2': '133%',
  'header-3': '133%',
  'header-4': '133%',
  'sub-title-1': '133%',
  'sub-title-2': '150%',
  'sub-title-3': '143%',
  'sub-title-4': '150%',
  'body-1': '150%',
  'body-2': '143%',
  'body-3': '143%',
  'body-4': '143%',
  'caption-1': '150%',
  'caption-2': '120%',
} as const;

const boxShadow = {
  xs: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  sm: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  md: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  lg: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
} as const;

export const XION_STYLE = {
  colors,
  borderRadius,
  spacing,
  fontSize,
  fontWeight,
  lineHeight,
  boxShadow,
};
