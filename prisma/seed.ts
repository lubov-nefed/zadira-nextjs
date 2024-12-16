import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialProducts = [
  {
    name: "Monkey With Hat",
    brand: "Toy Bash",
    img: "https://raw.githubusercontent.com/lubov-nefed/ajax-training/main/images/zadira/product-image-5.jpg",
    oldPrice: "59$",
    currentPrice: "45$",
    likes: 4,
    availability: "Out of stock",
  },
  {
    name: "Sad Bunny",
    brand: "KidsToy",
    img: "https://raw.githubusercontent.com/lubov-nefed/ajax-training/main/images/zadira/product-image-8.jpg",
    oldPrice: "",
    currentPrice: "39$",
    likes: 3,
    availability: "Stocked on demand",
  },
  {
    name: "Knitted Rabbit",
    brand: "Toytopia",
    img: "https://raw.githubusercontent.com/lubov-nefed/ajax-training/main/images/zadira/product-image-4.jpg",
    oldPrice: "",
    currentPrice: "27$",
    likes: 5,
    availability: "Out of stock",
  },
  {
    name: "Yellow Minion",
    brand: "Zadira",
    img: "https://raw.githubusercontent.com/lubov-nefed/ajax-training/main/images/zadira/product-image-3.jpg",
    oldPrice: "35$",
    currentPrice: "31$",
    likes: 5,
    availability: "In stock",
  },
  {
    name: "White Soft Bear",
    brand: "Funkidz",
    img: "https://raw.githubusercontent.com/lubov-nefed/ajax-training/main/images/zadira/product-image-7.jpg",
    oldPrice: "",
    currentPrice: "39$",
    likes: 1,
    availability: "In stock",
  },
  {
    name: "Knitted Bear Girl",
    brand: "KiddyMart",
    img: "https://raw.githubusercontent.com/lubov-nefed/ajax-training/main/images/zadira/product-image-6.jpg",
    oldPrice: "47$",
    currentPrice: "37$",
    likes: 5,
    availability: "In stock",
  },
  {
    name: "Octopus Soft",
    brand: "Popkids",
    img: "https://raw.githubusercontent.com/lubov-nefed/ajax-training/main/images/zadira/product-image-1.jpg",
    oldPrice: "",
    currentPrice: "23$",
    likes: 5,
    availability: "Out of stock",
  },
  {
    name: "Teddy Aviator",
    brand: "Playzone",
    img: "https://raw.githubusercontent.com/lubov-nefed/ajax-training/main/images/zadira/product-image-2.jpg",
    oldPrice: "30$",
    currentPrice: "25$",
    likes: 3,
    availability: "Stocked on demand",
  },
];

const initialUsers = [
  {
    name: "Tom",
    role: "admin",
    password: "!admin&Pass",
  },
  {
    name: "Jerry",
    role: "user",
    password: "user&123",
  },
];

const seed = async () => {
  for (const product of initialProducts) {
    await prisma.product.create({ data: product });
  }
  for (const user of initialUsers) {
    await prisma.user.create({ data: user });
  }
};

seed();
