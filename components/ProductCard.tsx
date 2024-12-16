import Image from "next/image";
import type { Product } from "@prisma/client";
import Link from "next/link";
import { StarRating } from "@/components/StarRating";

export function ProductCard(product: Product) {
  return (
    <Link
      href={`products/${product.id}`}
      className="m-2 border rounded border-gray-400"
    >
      <Image alt={product.name} src={product.img} width={240} height={240} />
      <p>{product.name}</p>
      <p>{product.brand}</p>
      <p className="line-through">{product.oldPrice}</p>
      <p>{product.currentPrice}</p>
      <StarRating quantity={product.likes} />
      <p>{product.availability}</p>
    </Link>
  );
}
