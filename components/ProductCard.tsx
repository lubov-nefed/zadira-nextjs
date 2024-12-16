import Image from "next/image";
import type { Product } from "@prisma/client";
import Link from "next/link";
import { StarRating } from "@/components/StarRating";
import { AddToCart } from "./AddToCart";

export function ProductCard(product: Product) {
  const isAvialable = product.availability !== "Out of stock";
  return (
    <div className="m-2 border rounded border-gray-400">
      <Link href={`products/${product.id}`}>
        <Image alt={product.name} src={product.img} width={240} height={240} />
        <p>{product.name}</p>
        <p>{product.brand}</p>
      </Link>
      <p className="line-through">{product.oldPrice}</p>
      <p>{product.currentPrice}</p>
      <StarRating quantity={product.likes} />
      <p>{product.availability}</p>
      {isAvialable && <AddToCart productId={product.id} />}
    </div>
  );
}
