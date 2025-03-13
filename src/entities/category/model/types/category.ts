export interface Category {
  id: number;
  name: string;
  alias: string;
  image: string;
}

export interface CategoryAttribute {
  id: number;
  key: string;
  values: string[];
  isMulti: boolean;
}
