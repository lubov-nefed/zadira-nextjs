"use server";
import { prisma } from "@/lib/prisma";
import type { Product, User } from "@prisma/client";
import { redirect } from "next/navigation";
import type { LoginFormState } from "@/auth/definitions";
import { createDbSession } from "./db-session";
import { createSession } from "./cookie-session";

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

async function getDbSessionByUserName(name: string) {
  return await prisma.session.findUnique({
    where: { userName: name },
  });
}

export async function login(
  state: LoginFormState,
  data: FormData
): Promise<LoginFormState> {
  const formData = Object.fromEntries(data.entries());
  //Find user in DataBase by credentials
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

  //Check if session for the user already exists
  const dbSession = await getDbSessionByUserName(user.name);
  console.log("dbSession", dbSession);
  //Creating session
  if (!dbSession) {
    await createDbSession(user);
    createSession(user.name);
  }

  //Decide where to redirect depending on user role (name)
  const admin = await isAdmin(user);
  console.log("isAdmin", admin);
  if (user && admin) {
    console.log("user is Admin");
    redirect("/admin");
  } else {
    console.log("created user session");
    redirect("/");
  }
}
