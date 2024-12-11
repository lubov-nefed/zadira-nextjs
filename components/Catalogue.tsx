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
    <>
      <h2>Catalogue</h2>
      <div className="flex flex-wrap">{catalogue}</div>
    </>
  );
}
