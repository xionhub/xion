'use client';
import { useRef } from 'react';

export const useThrottle = <ParamTypes extends unknown[]>(
  callback: (...params: ParamTypes) => void,
  time: number,
) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...params: ParamTypes) => {
    if (!timer.current) {
      timer.current = setTimeout(() => {
        callback(...params);
        timer.current = null;
      }, time);
    }
  };
};
