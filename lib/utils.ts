import { prisma } from "@/lib/prisma";
import type { Product } from "@prisma/client";

export async function getAllProducts() {
  return await prisma.product.findMany();
}

export async function getProductById(id: string): Promise<Product | null> {
  return await prisma.product.findUnique({ where: { id: id } });
}
