import { UNDERSCORE } from "@/shared/const/common-string";
import { SortType, SortDirection } from "@/shared/const/sorting";
import { getTypedObjectValues } from "../get-typed-object";

/**
 * Helper used to parse sort key 'id_asc', 'price_desc'
 * to get a typed enum values such as SortType.id, SortDirection.asc
 */
export const parseSortKey = (
  key: string
): { type: SortType; direction: SortDirection } | null => {
  const [typeStr, directionStr] = key.split(UNDERSCORE);

  const type = getTypedObjectValues(SortType).includes(typeStr)
    ? (typeStr as SortType)
    : null;

  const direction = getTypedObjectValues(SortDirection).includes(directionStr)
    ? (directionStr as SortDirection)
    : null;

  if (type && direction) {
    return { type, direction };
  }

  return null;
};
