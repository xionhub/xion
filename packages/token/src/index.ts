export const color = {
  neutral100: '#2C2932',
  neutral80: 'hsla(257, 4%, 34%, 1)',
  neutral60: 'rgba(44, 41, 50, 0.60);',
  neutral30: 'rgba(44, 41, 50, 0.30);',
  neutral20: 'rgba(44, 41, 50, 0.20);',
  neutral10: 'rgba(44, 41, 50, 0.10);',
  gray100: '#455268',
  gray80: '#718096',
  gray60: '#91A3BD',
  gray30: '#C9D8E9',
  gray20: '#DAE6F3',
  gray10: '#F4F9FF',
  primary100: '#313df4',
  primary80: '#5a75ef',
  primary60: '#8c9ef1',
  primary30: '#b7ccf4',
  primary20: '#daecff',
  primary10: '#e8f3ff',
  negative100: '#FF6C58',
  negative50: '#718096',
  negative10: '#FFF0EE',
  positive100: '#3366FF',
  positive50: '#99B2FF',
  positive10: '#EBF0FF',
  white: '#FFFFFF',
  black: 'hsla(0, 0%, 0%, 1)',
} as const;

export const radius = {
  sm: '10px',
  md: '20px',
  lg: '28px',
  xl: '60px',
  full: '1000px',
} as const;

export const fontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
} as const;

export const lineHeight = {
  tight: '100%',
  normal: '120%',
  medium: '150%',
  wide: '200%',
};

export const fontSize = {
  contentSmall: '0.875rem',
  contentNormal: '1rem',
  contentHighlight: '1.25rem',
  captionNormal: '0.5rem',
  captionHighlight: '0.75rem',
};

export const spacing = {
  gutter: '16px',
  sideMargin: '24px',
  '1': '4px',
  '2': '8px',
  '3': '12px',
  '4': '16px',
  '5': '20px',
  '6': '24px',
  '7': '28px',
  '8': '32px',
};
const width = {
  contentWidth: '312px',
  deviceWidth: '360px',
  full: '100%',
  half: '50%',
  '1/3': '33.3%',
  'w-screen': '100vw',
};

const height = {
  'h-screen': '100vh',
  full: '100%',
  half: '50%',
  '1/3': '33.3%',
  ctaHeight: '52px',
};
export const boxShadow = {};

export const token = {
  color,
  radius,
  boxShadow,
  lineHeight,
  fontWeight,
  width,
  spacing,
  height,
};
