import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "John Doe",
      books: {
        create: {
          name: "John Doe history of the book",
        }
      },
    },
  });

  console.log(result);
}

main();
