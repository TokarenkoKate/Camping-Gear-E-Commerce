import { MenuItem } from "../const/menu";

export type MenuItemType = Record<
  MenuItem,
  {
    text: string;
    path?: string;
  }
>;
