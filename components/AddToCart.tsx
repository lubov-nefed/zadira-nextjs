"use client";
import { addToCart } from "@/actions/addToCart";

export function AddToCart({ productId }: { productId: string }) {
  return (
    <button
      onClick={async () => {
        addToCart(productId);
      }}
      className="border border-gray-500 rounded px-2 pb-1 bg-blue-400 text-white hover:bg-blue-600 active:outline active:outline-2 active:outline-blue-900"
    >
      Add to Cart
    </button>
  );
}
