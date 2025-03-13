/**
 * Product filters form values type;
 * do not have fixed form fields,
 * as categories may have different filter attributes;
 */
export type ProductsFilterFormValues = Record<string, string[]> | null;
