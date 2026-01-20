import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// We are using MemStorage, so we don't need a real DB connection for this "no backend" request.
// However, we keep this file valid in case they want to upgrade later.
export const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL || "postgres://user:password@localhost:5432/db" 
});
export const db = drizzle(pool, { schema });
