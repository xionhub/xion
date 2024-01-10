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

type NumberToString<N extends number, R extends unknown[] = []> =
  | `${R['length']}`
  | (R['length'] extends N ? never : NumberToString<N, [unknown, ...R]>);

type NumberString<N extends number> = Exclude<NumberToString<N>, '0'>;

type SpacingKey = NumberString<20>;

export const spacing = Object.fromEntries(
  Array.from(Array(20)).map(
    (_, i) => [`${i + 1}`, `${(i + 1) / 4}rem`] as const,
  ),
) as {
  [key in SpacingKey]: string;
};

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

export const boxShadow = {};

export const token = {
  color,
  radius,
  boxShadow,
};
