import { renderHook } from '@testing-library/react';
import { useFunnel } from './use-funnel';
describe('use-funnel', () => {
  it('test', () => {
    const { result } = renderHook(() => useFunnel(['hi', 'hello']));
  });
});
