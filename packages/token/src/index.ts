const colors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'tranparent',
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',

  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground) / 90%)',
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))',
  },
  negative: {
    DEFAULT: 'hsl(var(--negative))',
    foreground: 'hsl(var(--negative-foreground))',
  },
  positive: {
    DEFAULT: 'hsl(var(--positive))',
    foreground: 'hsl(var(--positive-foreground))',
  },

  white: {
    DEFAULT: 'hsl(var(--white))',
  },

  neutral: {
    DEFAULT: 'hsl(var(--neutral))',
  },

  color: {
    'primary-hover': 'hsl(var(--primary) / 80%)',
    'primary-active': 'hsl(var(--primary) / 70%)',
    primary: 'hsl(var(--primary))',
    'neutral-accent': 'hsl(var(--neutral) / 90%)',
    neutral: 'hsl(var(--neutral) / 70%)',
    'white-accent': 'hsl(var(--white) /90%)',
    white: 'hsl(var(--white) /70%)',
    'success-accent': 'hsl(var(--positive) / 100%)',
    success: 'hsl(var(--positive) / 80%)',
    'danger-accent': 'hsl(var(--negative) / 100%)',
    danger: 'hsl(var(--negative) / 80%)',
    muted: 'hsl(var(--background) / 30%)',
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
  'header-1': 'calc(var(--font-size) * 2)',
  'header-2': 'calc(var(--font-size) * 1.75)',
  'sub-title-1': 'calc(var(--font-size) * 1.125)',
  'sub-title-2': 'calc(var(--font-size) * 1)',
  'sub-title-3': 'calc(var(--font-size) * 0.875)',
  'sub-title-4': 'calc(var(--font-size) * 0.75)',
  'body-1': 'calc(var(--font-size) * 1)',
  'body-2': 'calc(var(--font-size) * 0.875)',
  'caption-1': 'calc(var(--font-size) * 0.75)',
  'caption-2': 'calc(var(--font-size) * 0.625)',
} as const;

const fontWeight = {
  'header-1': '700',
  'header-2': '700',
  'sub-title-1': '600',
  'sub-title-2': '600',
  'sub-title-3': '600',
  'sub-title-4': '600',
  'body-1': '500',
  'body-2': '500',
  'caption-1': '500',
  'caption-2': '400',
} as const;

const lineHeight = {
  'header-1': '128%',
  'header-2': '133%',
  'sub-title-1': '133%',
  'sub-title-2': '150%',
  'sub-title-3': '143%',
  'sub-title-4': '150%',
  'body-1': '150%',
  'body-2': '143%',
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
