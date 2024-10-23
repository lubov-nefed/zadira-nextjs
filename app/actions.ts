"use server";
import { prisma } from "@/lib/prisma";
import type { Product } from "@prisma/client";
import { redirect } from "next/navigation";

export async function createProduct(data: FormData) {
  "use server";
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

export async function login(data: FormData) {
  const formData = Object.fromEntries(data.entries());
  //findUserByName
  try {
    const record = await prisma.user.findUnique({
      where: { name: formData.name },
    });
    //checkIfUserNameExists
    if (record) {
      //checkUserPassword
      if (formData.password === record.password) {
        console.log("Password is correct");
      } else {
        console.log("Password is incorrect");
      }
    } else {
      console.log("Wrong username");
    }
  } catch (error) {
    console.log(error);
  }
}
