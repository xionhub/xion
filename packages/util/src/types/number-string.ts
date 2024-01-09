type NumberToString<
  N extends number,
  R extends unknown[] = [],
> = R['length'] extends N
  ? never
  : `${R['length']}` | NumberToString<N, [unknown, ...R]>;

type ExcludeNumbers<
  T extends string,
  ExcludeFrom extends string,
> = T extends ExcludeFrom ? never : T;

export type NumberString<
  N extends number,
  Start extends number = 0,
> = ExcludeNumbers<NumberToString<N>, NumberToString<Start>>;
