"use server";
import { prisma } from "@/lib/prisma";
import type { Product, User } from "@prisma/client";
import { redirect } from "next/navigation";
import type { LoginFormState } from "@/auth/definitions";
import { createSession } from "./session";

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

async function isAdmin(user: User) {
  const adminCredentials = { name: "admin" };
  const admin: User = await prisma.user.findUnique({ where: adminCredentials });
  return user.id === admin.id;
}

async function getUser(formData: {
  [k: string]: FormDataEntryValue;
}): Promise<User | undefined> {
  try {
    const record: User = await prisma.user.findUnique({
      where: { name: formData.name, password: formData.password },
    });
    return record;
  } catch (error) {
    console.log(error);
  }
}

export async function login(
  state: LoginFormState,
  data: FormData
): Promise<LoginFormState> {
  const formData = Object.fromEntries(data.entries());
  const user = await getUser(formData);

  //Handle Server Error
  if (user === undefined) {
    return {
      message: "Oops! Server Error. Try again later.",
    };
  }
  //Handle User Not Found in DB
  if (user === null) {
    return {
      message: "Invalid login credentials.",
    };
  }

  const admin = await isAdmin(user);
  if (user && admin) {
    createSession(user);
    redirect("/admin");
  } else {
    createSession(user);
    redirect("/");
  }
}
