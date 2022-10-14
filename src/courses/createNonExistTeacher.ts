import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Elixir",
      duration: 100,
      description: "Curso de Elixir muito foda",
      teacher: {
        create: {
          name: "Fulano",
        },
      },
    },
  });

  console.log(result);
}

main();
