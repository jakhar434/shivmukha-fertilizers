import type { Product } from "@shared/schema";

const PRODUCTS: Product[] = [
  { id: 1, name: "Shakti Gold", description: "Tillering Booster", weight: "7kg", image: "/images/prod-01.png" },
  { id: 2, name: "Samrat", description: "Phosphate Rich Organic Manure (PROM)", weight: "50kg", image: "/images/prod-02.png" },
  { id: 3, name: "Chetak", description: "CMS Granules - Fertilizer", weight: "50kg", image: "/images/prod-03.png" },
  { id: 4, name: "Shakti", description: "Potash Derived from Molasses", weight: "50kg", image: "/images/prod-04.png" },
  { id: 5, name: "Powar Gro-G", description: "Organic Manure - Seaweed Extract Granules", weight: "10kg", image: "/images/prod-05.png" },
  { id: 6, name: "Trishul", description: "Tillering Booster - Control over borers", weight: "4kg", image: "/images/prod-06.png" },
  { id: 7, name: "Root Mex", description: "Mycorrhizal Bio Fertilizer", weight: "10kg", image: "/images/prod-07.png" },
  { id: 8, name: "Powar Gro-L", description: "Eco Friendly Foliar Spray", weight: "1Ltr", image: "/images/prod-09.png" },
  { id: 9, name: "PSB", description: "Crop Care", weight: "", image: "/images/prod-10.png" },
];

export function useProducts() {
  return {
    data: PRODUCTS,
    isLoading: false,
    error: null,
  };
}

export function useProduct(id: number) {
  return {
    data: PRODUCTS.find((p) => p.id === id),
    isLoading: false,
    error: null,
  };
}
