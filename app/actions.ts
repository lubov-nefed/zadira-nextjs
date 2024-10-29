"use server";
import { prisma } from "@/lib/prisma";
import type { Product } from "@prisma/client";
import { redirect } from "next/navigation";
import type { LoginFormState } from "@/auth/definitions";

export async function createProduct(data: FormData) {
  const { name, brand, img, oldPrice, currentPrice, availability } =
    Object.fromEntries(data) as Omit<Product, "id" | "likes">;
  const likes = 0;
  await prisma.product.create({
    data: {
      name,
      brand,
      img,
      oldPrice,
      currentPrice,
      likes,
      availability,
    },
  });
  redirect(`/`);
}

export async function login(
  state: LoginFormState,
  data: FormData
): Promise<LoginFormState> {
  const formData = Object.fromEntries(data.entries());
  const errorMessage = "Invalid login credentials.";

  //working with db
  //findUserByName
  try {
    const record = await prisma.user.findUnique({
      where: { name: formData.name },
    });
    //ifUserNotFound
    if (!record) {
      return {
        message: errorMessage,
      }; //ifUserFoundCheckPassword
    }
    if (record && formData.password !== record.password) {
      return {
        message: errorMessage,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Oops! Server Error. Try again later.",
    };
  }
}
