const colors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'tranparent',

  background: {
    '50': 'var(--background-50)',
    '100': 'var(--background-100)',
    '200': 'var(--background-200)',
    '300': 'var(--background-300)',
    '400': 'var(--background-400)',
    '500': 'var(--background-500)',
    '600': 'var(--background-600)',
    '700': 'var(--background-700)',
    '800': 'var(--background-800)',
    '900': 'var(--background-900)',
  },

  foreground: {
    '50': 'var(--foreground-50)',
    '100': 'var(--foreground-100)',
    '200': 'var(--foreground-200)',
    '300': 'var(--foreground-300)',
    '400': 'var(--foreground-400)',
    '500': 'var(--foreground-500)',
    '600': 'var(--foreground-600)',
    '700': 'var(--foreground-700)',
    '800': 'var(--foreground-800)',
    '900': 'var(--foreground-900)',
  },

  white: {
    DEFAULT: 'hsl(var(--white))',
  },

  neutral: {
    '50': '#f4eff4ff',
    '100': '#e6e1e5ff',
    '200': '#c9c5caff',
    '300': '#aeaaaeff',
    '400': '#939094ff',
    '500': '#787579ff',
    '600': '#605d62ff',
    '700': '#484649ff',
    '800': '#313033ff',
    '900': '#1c1b1fff',
    '950': '#000000ff',
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
    '50': 'var(--negative-50)',
    '100': 'var(--negative-100)',
    '200': 'var(--negative-200)',
    '300': 'var(--negative-300)',
    '400': 'var(--negative-400)',
    '500': 'var(--negative-500)',
    '600': 'var(--negative-600)',
    '700': 'var(--negative-700)',
    '800': 'var(--negative-800)',
    '900': 'var(--negative-900)',
    '950': 'var(--negative-950)',
  },
  primary: {
    '50': 'var(--primary-50)',
    '100': 'var(--primary-100)',
    '200': 'var(--primary-200)',
    '300': 'var(--primary-300)',
    '400': 'var(--primary-400)',
    '500': 'var(--primary-500)',
    '600': 'var(--primary-600)',
    '700': 'var(--primary-700)',
    '800': 'var(--primary-800)',
    '900': 'var(--primary-900)',
    '950': 'var(--primary-950)', // 추가되어 있지 않았지만 필요에 따라 포함
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
  '768': 'calc(var(--spacing) * 384)',
  '1024': 'calc(var(--spacing) * 512)',
  '1440': 'calc(var(--spacing) * 720)',
  '1/3': '33.3%',
  half: '50%',
  full: '100%',
} as const;

const fontSize = {
  'title-1': 'calc(var(--font-size) * 4)',
  'title-2': 'calc(var(--font-size) * 3)',
  'title-3': 'calc(var(--font-size) * 2.25)',
  'title-4': 'calc(var(--font-size) * 2)',
  'title-5': 'calc(var(--font-size) * 1.75)',
  'title-6': 'calc(var(--font-size) * 1.5)',
  'body-1': 'calc(var(--font-size) * 1.375)',
  'body-2': 'calc(var(--font-size) * 1.25)',
  'body-3': 'calc(var(--font-size) * 1.125)',
  'body-4': 'calc(var(--font-size) * 1)',
  'caption-1': 'calc(var(--font-size) * 0.875)',
  'caption-2': 'calc(var(--font-size) * 0.75)',
} as const;

const fontWeight = {
  bold: '700',
  'semi-bold': '600',
  medium: '500',
  regular: '400',
  light: '300',
} as const;

const lineHeight = {
  '133%': '133%',
  '150%': '150%',
  '166%': '166%',
  '200%': '200%',
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
