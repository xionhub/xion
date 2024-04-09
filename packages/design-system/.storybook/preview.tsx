import React from 'react';
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
  decorators: [
    Story => (
      <div className=" font-suit">
        <Story />
      </div>
    ),
  ],
};

export default preview;
