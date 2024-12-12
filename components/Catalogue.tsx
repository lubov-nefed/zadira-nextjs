import { prisma } from "@/lib/prisma";
import { Product } from "@prisma/client";

function getAllProducts() {
  return prisma.product.findMany();
}
export async function Catalogue() {
  const products = await getAllProducts();
  const catalogue = products.map((product: Product) => (
    <p key={product.id} className="m-2 border rounded border-gray-400">
      {product.name}
    </p>
  ));
  return (
    <div className="p-4">
      <h2 className="font-semibold pl-2">Catalogue</h2>
      <div className="flex flex-wrap">{catalogue}</div>
    </div>
  );
}
