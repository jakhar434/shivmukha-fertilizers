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
      { name: "Shakti Gold", description: "Tillering Booster", weight: "7kg", image: "/images/prod-01.png" },
      { name: "Samrat", description: "Phosphate Rich Organic Manure (PROM)", weight: "50kg", image: "/images/prod-02.png" },
      { name: "Chetak", description: "CMS Granules - Fertilizer", weight: "50kg", image: "/images/prod-03.png" },
      { name: "Shakti", description: "Potash Derived from Molasses", weight: "50kg", image: "/images/prod-04.png" },
      { name: "Powar Gro-G", description: "Organic Manure - Seaweed Extract Granules", weight: "10kg", image: "/images/prod-05.png" },
      { name: "Trishul", description: "Tillering Booster - Control over borers", weight: "4kg", image: "/images/prod-06.png" },
      { name: "Root Mex", description: "Mycorrhizal Bio Fertilizer", weight: "10kg", image: "/images/prod-07.png" },
      { name: "Powar Gro-L", description: "Eco Friendly Foliar Spray", weight: "1Ltr", image: "/images/prod-09.png" },
      { name: "PSB", description: "Crop Care", weight: "", image: "/images/prod-10.png" }
    ];

    const teamList: InsertTeamMember[] = [
      { name: "Hira Ram", role: "Director", image: "/images/team/hira_ram.jpg" },
      { name: "Ramvilash Jat", role: "Director", image: "/images/team/ramvilash_jat.jpg" }
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
