export const convertListToObject = <T extends Array<string>, Value>(
  list: T,
  value: Value,
): Record<T[number], Value> => {
  return list.reduce(
    (obj, str) => {
      obj[str as T[number]] = value;
      return obj;
    },
    {} as { [key in T[number]]: Value },
  );
};
