import { render, renderHook, screen } from '@testing-library/react';
import React from 'react';

describe('루트에서 esm 문법으로 jest가 import 가능한지 테스트합니다.', () => {
  it('rtl 관련 메서드의 import 와 동작에 문제 여부를 테스트합니다.', () => {
    render(<div data-testid="test">test</div>);
    renderHook(() => React.useState(false));
    expect(true).toBe(true);

    expect(screen.getByTestId('test')).toBeInTheDocument();
  });
});
