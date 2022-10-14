import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "The Shawshank Redemption vol. II",
      author_id: "de9c4e30-d150-48df-b76d-930f2552bf7e",
    },
  });

  console.log(result);
}

main();
