export const getTypedObjectKeys = <T extends string | number>(
  object: object
): Array<T> => {
  return Object.keys(object) as Array<T>;
};

export const getTypedObjectValues = <T>(object: object): Array<T> => {
  return Object.values(object) as Array<T>;
};

export function getTypedObjectEntries<T extends object>(
  object: T
): Array<[keyof T, T[keyof T]]> {
  return Object.entries(object) as Array<[keyof T, T[keyof T]]>;
}
