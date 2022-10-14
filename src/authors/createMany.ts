import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Mary Doe",
      books: {
        createMany: {
          data: [
            {
              name: "The Shawshank Redemption",
            },
            {
              name: "The Godfather",
            },
            {
              name: "The Godfather: Part II",
            },
            {
              name: "The Dark Knight",
            }
          ],
        },
      },
    },
  });

  console.log(result);
}

main();
