import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 350,
          name: "Curso de NodeJs Suplementar",
          description: "Curso de NodeJs Suplementar de 100% de aproveitamento",
          teacher: {
            connect: {
              id: "cfb3b65a-b441-4b6d-b200-d9fcc751354f",
            },
          },
        },
      },
      module: {
        create: {
          description: "Curso completo de PrismaIO",
          name: "PrismaIO",
        },
      },
    },
  });

  console.log(result);
}

main();
