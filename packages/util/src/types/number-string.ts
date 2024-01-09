type NumberToString<
  N extends number,
  R extends unknown[] = [],
> = R['length'] extends N
  ? never
  : `${R['length']}` | NumberToString<N, [unknown, ...R]>;

type ExcludeNumbers<
  ExcludeFrom extends string,
  End extends string,
> = End extends ExcludeFrom ? never : End;

export type NumberString<
  Start extends number = 0,
  End extends number = 0,
> = ExcludeNumbers<NumberToString<Start>, NumberToString<End>>;

