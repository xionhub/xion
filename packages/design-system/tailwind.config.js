import { XION_STYLE } from '@xionhub/token';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    './storybook-static/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...XION_STYLE,
    fontFamily: {
      suit: ['SUIT', 'sans-serif'], // 폰트 패밀리 이름과 폴백 폰트 지정
    },
  },
  plugins: [],
  darkMode: ['class'],
};
