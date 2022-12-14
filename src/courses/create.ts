import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de JavaScript",
      duration: 3000,
      description: "Curso de JavaScript muito foda",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Jackie Chan",
          },
          create: {
            name: "Jackie Chan",
          },
        },
      },
    },
  });

  console.log(result);
}

main();
