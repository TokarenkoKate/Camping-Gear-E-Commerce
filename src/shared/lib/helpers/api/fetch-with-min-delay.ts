export const fetchWithMinDelay = async <T>(
  request: () => Promise<T>,
  minDelay: number = 2000
): Promise<T> => {
  const start = Date.now();

  const result: T = await request();

  const elapsed = Date.now() - start;
  const remainingTime = Math.max(minDelay - elapsed, 0);

  if (remainingTime > 0) {
    await new Promise((resolve) => setTimeout(resolve, remainingTime));
  }

  return result;
};
