import type { Product } from "@prisma/client";
import { getAllProducts, getProductById } from "@/lib/utils";
import Image from "next/image";
import star from "@/star.svg";

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
  const product: Product = await getProductById(id);
  const stars = Array.from({ length: product.likes }).map((el, index) => (
    <Image
      key={index}
      alt="star"
      src={star}
      width={20}
      height={20}
      className="inline"
    />
  ));
  const isProductAvialable = product.availability !== "Out of stock";
  return (
    <div className="flex flex-wrap p-4">
      <div>
        <h2 className="font-semibold">{product.name}</h2>
        <p>{product.brand}</p>
        <Image alt={product.name} src={product.img} width={240} height={240} />
        <p className="text-gray-400">{product.id}</p>
      </div>
      <div className="grid gap-4 mx-0 my-auto p-4">
        <p className="line-through text-center">{product.oldPrice}</p>
        <p className="font-bold text-center">{product.currentPrice}</p>
        {isProductAvialable && (
          <button className="border border-gray-500 rounded px-2 pb-1 bg-blue-400 text-white hover:bg-blue-600 active:outline active:outline-2 active:outline-blue-900">
            Buy
          </button>
        )}

        <p>{product.availability}</p>
        <div>{stars}</div>
      </div>
    </div>
  );
}
