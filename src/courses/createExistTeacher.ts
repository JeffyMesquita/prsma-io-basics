import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React Native",
      duration: 3000,
      description: "Curso de React Native muito foda",
      teacher: {
        connect: {
          id: "2d8a1573-2282-4575-90ad-7e40dcf51c67",
        },
      },
    },
  });

  console.log(result);
}

main();
