// lib/prisma.ts
import { PrismaClient } from "../lib/generated/prisma";  // ← now matches your output



export const db = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
