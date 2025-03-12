import { Pager } from "@/shared/types/api/api-types";

export const isLastPage = (pager: Pager | null | undefined) => {
  if (!pager) return true;
  const { page, perPage, total } = pager;
  if (!perPage || perPage > total) return true;
  const noOfPages = Math.ceil(total / perPage);
  return page === noOfPages;
};
