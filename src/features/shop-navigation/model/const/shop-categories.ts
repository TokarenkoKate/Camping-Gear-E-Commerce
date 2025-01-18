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
import { Category } from "@/entities/category";

export const shopNavigationItems: Category[] = [
  {
    name: "Solo Tent",
    description: "(1~2)",
    Svg: SoloTent,
  },
  {
    name: "Group Tent",
    description: "(3~6)",
    Svg: GroupTent,
  },
  {
    name: "Tarp",
    Svg: Tarp,
  },
  {
    name: "Accessories",
    Svg: Accessories,
  },
  {
    name: "Table",
    Svg: Table,
  },
  {
    name: "Chair",
    Svg: Chair,
  },
  {
    name: "Fire",
    Svg: Fire,
  },
  {
    name: "Sleeping",
    Svg: Sleeping,
  },
  {
    name: "Cooler",
    Svg: Cooler,
  },
  {
    name: "Kitchen",
    Svg: Kitchen,
  },
  {
    name: "Storage & Carry",
    Svg: Carry,
  },
  {
    name: "Bag",
    Svg: Bag,
  },
];
