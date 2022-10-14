import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "b419887a-6cab-44b7-a57f-f26bae05ce18",
    },
  });


  console.log(result);
}

main();