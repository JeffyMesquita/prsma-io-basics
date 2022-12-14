import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "389db7ee-c177-4496-9f21-804ad4a5fda6",
    },
    data: {
      duration: 250,
      name: "Curso de ReactJS",
    },
  });

  console.log(result);
}

main();
