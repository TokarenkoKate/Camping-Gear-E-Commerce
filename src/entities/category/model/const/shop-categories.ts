import SoloTent from "@/shared/assets/icons/categories/solo-tent.svg";
import GroupTent from "@/shared/assets/icons/categories/group-tent.svg";
import Tarp from "@/shared/assets/icons/categories/tarp.svg";
import Accessories from "@/shared/assets/icons/categories/accessories.svg";
import Table from "@/shared/assets/icons/categories/table.svg";
import Chair from "@/shared/assets/icons/categories/chair.svg";
import Fire from "@/shared/assets/icons/categories/fire.svg";
import Sleeping from "@/shared/assets/icons/categories/sleeping.svg";
import Cooler from "@/shared/assets/icons/categories/cooler.svg";
import Kitchen from "@/shared/assets/icons/categories/kitchen.svg";
import Carry from "@/shared/assets/icons/categories/carry.svg";
import Bag from "@/shared/assets/icons/categories/bag.svg";
import { Category } from "../types/category";

export const categoryItems: Category[] = [
  {
    name: "Solo Tent",
    description: "(1~2)",
    href: "solo-tent",
    Svg: SoloTent,
  },
  {
    name: "Group Tent",
    description: "(3~6)",
    href: "group-tent",
    Svg: GroupTent,
  },
  {
    name: "Tarp",
    href: "tarp",
    Svg: Tarp,
  },
  {
    name: "Accessories",
    href: "accessories",
    Svg: Accessories,
  },
  {
    name: "Table",
    href: "table",
    Svg: Table,
  },
  {
    name: "Chair",
    href: "chair",
    Svg: Chair,
  },
  {
    name: "Fire",
    href: "fire",
    Svg: Fire,
  },
  {
    name: "Sleeping",
    href: "sleeping",
    Svg: Sleeping,
  },
  {
    name: "Cooler",
    href: "cooler",
    Svg: Cooler,
  },
  {
    name: "Kitchen",
    href: "kitchen",
    Svg: Kitchen,
  },
  {
    name: "Storage & Carry",
    href: "storage",
    Svg: Carry,
  },
  {
    name: "Bag",
    href: "bag",
    Svg: Bag,
  },
];
