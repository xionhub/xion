import { render, renderHook } from '@testing-library/react';
import React from 'react';

describe('test', () => {
  it('hidsadsadas', () => {
    render(<div>dsad</div>);
    renderHook(() => React.useState(false));
    expect(true).toBe(true);
  });
});
