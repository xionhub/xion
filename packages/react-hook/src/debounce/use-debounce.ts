'use client';
import { useRef } from 'react';

export const useDebounce = <ParamType extends unknown[]>(
  callback: (...params: ParamType) => void,
  time: number,
) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  return (...params: ParamType) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      callback(...params);
      timer.current = null;
    }, time);
  };
};
