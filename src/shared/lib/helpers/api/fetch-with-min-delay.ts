export const fetchWithMinDelay = async (
  requests: Array<() => Promise<unknown>>,
  minDelay: number = 2000
) => {
  const start = Date.now();

  const result = await Promise.allSettled(
    requests.map(async (request) => {
      await request();
    })
  );

  const elapsed = Date.now() - start;
  const remainingTime = Math.max(minDelay - elapsed, 0);

  if (remainingTime > 0) {
    await new Promise((resolve) => setTimeout(resolve, remainingTime));
  }

  return result;
};
