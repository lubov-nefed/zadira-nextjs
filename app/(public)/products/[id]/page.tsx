import type { Product } from "@prisma/client";
import { getAllProducts, getProductById } from "@/lib/utils";

const products = await getAllProducts();

export async function generateStaticParams() {
  return products.map((product: Product) => ({ id: product.id }));
}
export const dynamicParams = false;

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const currentProduct: Product = await getProductById(id);
  const productKeys: (keyof Product)[] = Object.keys(
    currentProduct
  ) as (keyof Product)[];
  const productInfo = productKeys.map((key) => (
    <p key={key}>{key + ": " + currentProduct[key]}</p>
  ));
  return (
    <div>
      <h2>Product id: {id}</h2> {productInfo}
    </div>
  );
}
