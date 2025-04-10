import { DELAYED_LOADING_TIMEOUT } from "@/shared/const/general";
import { UseMutationResult } from "@tanstack/react-query";

/**
 * Reusable wrapper function used to delay submit
 * ensuring a minimum "loading" experience to avoid flickers,
 * but still respecting the real request time.
 * @param mutation result of useMutation
 * @param body argument passed to mutation.mutate,
 * @param onSuccess success callback
 */
export const submitWithMinDelay = async <T, K>(
  mutation: UseMutationResult<T, Error, K, unknown>,
  body: K,
  onSuccess: (result: T) => void
) => {
  return await Promise.all([
    new Promise<T>((resolve, reject) => {
      return mutation.mutate(body, {
        onSuccess: (res: T) => resolve(res),
        onError: reject,
      });
    }),
    new Promise<void>((resolveTimeout) =>
      setTimeout(resolveTimeout, DELAYED_LOADING_TIMEOUT)
    ),
  ]).then((result) => {
    /**
     * The first item of `result` will be the resolved mutation value
     */
    const [mutationResult] = result;
    /**
     * Call the provided onSuccess handler
     */
    onSuccess(mutationResult);
  });
};
