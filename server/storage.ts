import { products, teamMembers, type Product, type InsertProduct, type TeamMember, type InsertTeamMember } from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getTeamMembers(): Promise<TeamMember[]>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private teamMembers: Map<number, TeamMember>;
  private productIdCounter = 1;
  private teamIdCounter = 1;

  constructor() {
    this.products = new Map();
    this.teamMembers = new Map();
    this.seedData();
  }

  private seedData() {
    const productsList: InsertProduct[] = [
      { name: "Shakti Gold", description: "Tillering Booster", weight: "7kg", image: "/attached_assets/01_1768937653508.pdf" },
      { name: "Samrat", description: "Phosphate Rich Organic Manure (PROM)", weight: "50kg", image: "/attached_assets/01_1768937653508.pdf" },
      { name: "Chetak", description: "CMS Granules - Fertilizer", weight: "50kg", image: "/attached_assets/01_1768937653508.pdf" },
      { name: "Shakti", description: "Potash Derived from Molasses", weight: "50kg", image: "/attached_assets/01_1768937653508.pdf" },
      { name: "Powar Gro-G", description: "Organic Manure - Seaweed Extract Granules", weight: "10kg", image: "/attached_assets/01_1768937653508.pdf" },
      { name: "Trishul", description: "Tillering Booster - Control over borers", weight: "4kg", image: "/attached_assets/01_1768937653508.pdf" },
      { name: "Root Mex", description: "Mycorrhizal Bio Fertilizer", weight: "10kg", image: "/attached_assets/01_1768937653508.pdf" },
      { name: "Powar Gro-L", description: "Eco Friendly Foliar Spray", weight: "1Ltr", image: "/attached_assets/01_1768937653508.pdf" },
      { name: "PSB", description: "Crop Care", weight: "N/A", image: "/attached_assets/01_1768937653508.pdf" }
    ];

    const teamList: InsertTeamMember[] = [
      { name: "Hira Ram", role: "Director", image: "https://placehold.co/400x400?text=HR" },
      { name: "Ramvilash Jat", role: "Director", image: "https://placehold.co/400x400?text=RJ" }
    ];

    productsList.forEach(p => {
      const id = this.productIdCounter++;
      this.products.set(id, { ...p, id });
    });

    teamList.forEach(t => {
      const id = this.teamIdCounter++;
      this.teamMembers.set(id, { ...t, id });
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values());
  }
}

export const storage = new MemStorage();
