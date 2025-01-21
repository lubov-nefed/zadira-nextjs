"use server";
import { prisma } from "@/lib/prisma";
import type { Product, User } from "@prisma/client";
import { redirect } from "next/navigation";
import type { LoginFormState } from "@/auth/definitions";
import { setSessionCookies } from "./cookie-session";
import { cookies } from "next/headers";

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
  const admin: User | null = await prisma.user.findUnique({
    where: adminCredentials,
  });
  if (!admin) {
    throw Error("User not found");
  } else return user.id === admin.id;
}

async function getDbUserByFormData(formData: {
  [k: string]: FormDataEntryValue;
}): Promise<User | null> {
  try {
    const record: User | null = await prisma.user.findUnique({
      where: {
        name: formData.name as string,
        password: formData.password as string,
      },
    });
    if (record) {
      return record;
    } else {
      throw Error("User not found");
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function login(
  state: LoginFormState,
  data: FormData
): Promise<LoginFormState> {
  const formData = Object.fromEntries(data.entries());
  //Find user in DataBase by credentials
  const user = await getDbUserByFormData(formData);

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

  //Creating session
  setSessionCookies(user.name);

  //Decide where to redirect depending on user role (name)
  const admin = await isAdmin(user);
  if (user && admin) {
    redirect("/admin");
  } else {
    redirect("/");
  }
}

export async function deleteSessionCookies() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
  redirect(`/`);
}
