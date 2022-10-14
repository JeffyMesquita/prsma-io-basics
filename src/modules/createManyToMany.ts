import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.createMany({
    data: {
      fk_id_course: "08f50e82-6ee7-4f2b-bdca-b80e6016b380",
      fk_id_module: "dfd678c1-b285-456c-b3bd-ff16f332b938",
    },
  });


  console.log(result);
}

main();