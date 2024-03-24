import type { Preview } from '@storybook/react';
import '../src/tailwind.css';
import '../src/token.css';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
