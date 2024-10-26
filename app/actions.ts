"use server";
import { prisma } from "@/lib/prisma";
import type { Product } from "@prisma/client";
import { redirect } from "next/navigation";
import { LoginFormSchema } from "@/auth/definitions";
import type { FormState } from "@/auth/definitions";

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

export async function login(state: FormState, data: FormData) {
  const formData = Object.fromEntries(data.entries());
  //validate fields
  const validatedFields = LoginFormSchema.safeParse({
    name: formData.name,
    password: formData.password,
  });
  console.log(validatedFields);

  //findUserByName
  try {
    const record = await prisma.user.findUnique({
      where: { name: formData.name },
    });
    //checkIfUserNameExists
    if (record) {
      //checkUserPassword
      if (formData.password === record.password) {
        return {
          field: "password",
          message: "Password is correct",
        };
      } else {
        return {
          field: "password",
          message: "Password is incorrect",
        };
      }
    } else {
      return {
        field: "name",
        message: "Wrong username",
      };
    }
  } catch (error) {
    console.log(error);
  }
}
