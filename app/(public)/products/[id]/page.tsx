import type { Product } from "@prisma/client";
import { getAllProducts, getProductById } from "@/lib/utils";
import Image from "next/image";
import { StarRating } from "@/components/StarRating";
import Link from "next/link";
import { AddToCart } from "@/components/AddToCart";

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
  const product: Product | null = await getProductById(id);
  if (!product) {
    throw Error("Product not found");
  } else {
    const isProductAvialable = product.availability !== "Out of stock";
    return (
      <div className="flex flex-wrap p-4">
        <div>
          <h2 className="font-semibold">{product.name}</h2>
          <p>{product.brand}</p>
          <Image
            alt={product.name}
            src={product.img}
            width={240}
            height={240}
          />
          <p className="text-gray-400">{product.id}</p>
        </div>
        <div className="grid gap-4 mx-0 my-auto p-4">
          <StarRating quantity={product.likes} />
          <div>
            <span className="px-2 line-through text-center">
              {product.oldPrice}
            </span>
            <span className="px-2 font-bold text-center">
              {product.currentPrice}
            </span>
          </div>
          {isProductAvialable && <AddToCart productId={product.id} />}

          <p>{product.availability}</p>
          {!isProductAvialable && (
            <Link href={"/"} className="underline hover:text-blue-700">
              Return to Catalogue
            </Link>
          )}
        </div>
      </div>
    );
  }
}
