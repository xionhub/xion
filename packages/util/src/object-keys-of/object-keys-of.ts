export const objectKeysOf = <GenericObject extends Object>(
  obj: GenericObject,
) => {
  return Array.from(Object.keys(obj) as Array<keyof GenericObject>);
};
