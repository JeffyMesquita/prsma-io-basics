import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de ReactJS",
      duration: 300,
      description: "Curso de ReactJs muito foda foda",
      fk_teachers_id: "f918aa96-bea4-4f81-8a23-c3039b4d9224",
    },
  });

  console.log(result);
}

main();
