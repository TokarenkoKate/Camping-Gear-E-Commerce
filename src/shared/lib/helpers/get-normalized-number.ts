export const getNormalizedNumber = (value: unknown): number => {
  const num = Number(value);
  return Number.isFinite(num) ? num || 0 : 0;
};
