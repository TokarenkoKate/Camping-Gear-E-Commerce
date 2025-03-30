export type ListHeaderFormValues = Record<string, string[]> | null;

export type ListHeaderFilterAttribute = {
  id: number;
  key: string;
  values: string[];
  isMulti: boolean;
};
