import { Product } from "@prisma/client";
import { ProductCard } from "./ProductCard";
import { Fragment } from "react";
import { getAllProducts } from "@/lib/utils";

export async function Catalogue() {
  const products = await getAllProducts();
  const catalogue = products.map((product: Product) => (
    <Fragment key={product.id}>
      <ProductCard {...product} />
    </Fragment>
  ));
  return (
    <div className="p-4">
      <h2 className="font-semibold pl-2">Catalogue</h2>
      <div className="flex flex-wrap">{catalogue}</div>
    </div>
  );
}
