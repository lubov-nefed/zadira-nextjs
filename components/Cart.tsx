import cart from "@/cart.svg";
import Image from "next/image";

export function Cart({ user }: { user: string }) {
  return (
    <button>
      <Image height={20} width={20} alt="Cart" src={cart}></Image>
      <p>{user.toUpperCase()}&apos;s cart</p>
    </button>
  );
}
