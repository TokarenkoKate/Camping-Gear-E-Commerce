import { ProductDetails, ProductSummary } from "@/entities/product";
import productImg1 from "./product_id_1.png";

export const mockProductDetails: ProductDetails = {
  id: 1,
  name: "Forceatt Camping Tent",
  category: "tent",
  price: "$74.99",
  colors: ["#C7AC89", "#E6C06E", "#3C5D48", "#553927"],
  imageUrl: productImg1,
  visuals: {
    title: "Rain-Ready Convenience",
    description: `Discover all-weather versatility! With the specially designed flysheet
          (compatible with one-touch tent (M) TF3-619-TN), your one-touch tent
          becomes rain-resistant, offering added protection and peace of mind
          during your outdoor adventures.`,
    imagesUrl: [productImg1, productImg1, productImg1],
  },
};

export const mockProductId1: ProductSummary = {
  id: 1,
  name: "Forceatt Camping Tent",
  category: "tent",
  price: "$74.99",
  colors: ["#C7AC89", "#E6C06E", "#3C5D48", "#553927"],
  thumbnailUrl: productImg1,
};

export const mockProductId2: ProductSummary = {
  id: 2,
  name: "Guide Gear Padded Camping Chair",
  category: "chair",
  price: "$82.99",
  colors: ["#C7AC89", "#E6C06E", "#3C5D48", "#464A52"],
  thumbnailUrl: productImg1,
};

export const mockProductId3: ProductSummary = {
  id: 3,
  name: "Ultralight Aluminum Folding Camping Chair",
  category: "chair",
  price: "$78.46",
  colors: ["#464A52", "#E6C06E", "#8F7261", "#3C5D48"],
  thumbnailUrl: productImg1,
};

export const mockProductId4: ProductSummary = {
  id: 4,
  name: "Cold Weather & Warm Sleeping Bags",
  category: "sleeping",
  price: "$19.99",
  colors: ["#453117", "#576F93", "#FB5B36"],
  thumbnailUrl: productImg1,
};

export const mockProductId5: ProductSummary = {
  id: 5,
  name: "Lightweight Waterproof Camping Tent",
  category: "sleeping",
  price: "$199.50",
  colors: ["#BB9D7C", "#E6C06E", "#3C5D48", "#554027"],
  thumbnailUrl: productImg1,
};

export const mockProductId6: ProductSummary = {
  id: 6,
  name: "Folding Campfire Grill Grate",
  category: "kitchen",
  price: "$27.95",
  colors: [],
  thumbnailUrl: productImg1,
};

export const mockProductId7: ProductSummary = {
  id: 7,
  name: "Insulated Portable Cooler",
  category: "kitchen",
  price: "$54",
  colors: ["#A48D68", "#3C5D48"],
  thumbnailUrl: productImg1,
};

export const mockProductId8: ProductSummary = {
  id: 8,
  name: "Folding Campfire Grill Grate with Grill Plate",
  category: "kitchen",
  price: "$33.59",
  colors: [],
  thumbnailUrl: productImg1,
};

export const mockProductId9: ProductSummary = {
  id: 9,
  name: "Weather Master Camping Tent",
  category: "tent",
  price: "$162.29",
  colors: ["#C7AC89", "#576F93"],
  thumbnailUrl: productImg1,
};

export const mockProductId10: ProductSummary = {
  id: 10,
  name: "Weather Master Camping Tent",
  category: "tent",
  price: "$162.29",
  colors: ["#C7AC89", "#576F93"],
  thumbnailUrl: productImg1,
};

export const mockProductId11: ProductSummary = {
  id: 11,
  name: "Crossbody Sling Backpack Sling Bag",
  category: "bag",
  price: "$22.07",
  colors: ["#131315", "#FFF1CB", "#C2D1D8", "#576F93"],
  thumbnailUrl: productImg1,
};

export const mockProductId12: ProductSummary = {
  id: 12,
  name: "Folding Food Carrier Bag Portable Grocery Bag(48L)",
  category: "bag",
  price: "$39.99",
  colors: ["#C5B296", "#E6C06E", "#DCC5B7", "#69675A"],
  thumbnailUrl: productImg1,
};

export const mockProductId13: ProductSummary = {
  id: 13,
  name: "Lodge 10.25 Inch Cast Iron Pre-Seasoned Skillet",
  category: "kitchen",
  price: "$19.90",
  colors: [],
  thumbnailUrl: productImg1,
};

export const mockProductId14: ProductSummary = {
  id: 14,
  name: "Outland Living Firebowl Mega Outdoor Propane Gas Fire Pit",
  category: "kitchen",
  price: "$207.99",
  colors: [],
  thumbnailUrl: productImg1,
};

export const mockProductId15: ProductSummary = {
  id: 14,
  name: "Camping Coffee Mug",
  category: "kitchen",
  price: "$14.99",
  colors: ["#9F8776", "#E6C06E", "#3C5D48", "#69675A"],
  thumbnailUrl: productImg1,
};

export const mockProductsGallery = [
  mockProductId1,
  mockProductId2,
  mockProductId3,
  mockProductId4,
  mockProductId5,
  mockProductId6,
  mockProductId7,
];
