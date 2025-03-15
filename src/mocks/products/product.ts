import { ProductCart, ProductSummary } from "@/entities/product";
import productImg1 from "./product_id_1.png";

export const mockProductId1: ProductSummary = {
  id: 1,
  name: "Forceatt Camping Tent",
  category: "tent",
  price: "$74.99",
  attributes: [
    { key: "color", values: ["#C7AC89", "#E6C06E", "#3C5D48", "#553927"] },
  ],
  thumbnail: productImg1,
  currency: "",
};

export const mockProductCart: ProductCart = {
  id: 14,
  name: "Camping Coffee Mug",
  category: "kitchen",
  price: "$14.99",
  color: "Coyote Brown",
  thumbnail: productImg1,
  reward: "1350 point",
  currency: "",
  attributes: [],
};
