import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      description: "Aprendendo Firebase do 0",
      name: "Aprendendo Firebase",
      coursesModules: {
        create: {
          course: {
            connect: {
              id: "612e0597-1f63-481e-ab05-1532f167c9b7",
            },
          },
        },
      },
    },
  });

  console.log(result);
}

main();
