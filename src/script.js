const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // this adds a new link to the database
  /*
  const newLink = await prisma.link.create({
    data: {
      description: "Fullstack tutorial for graphql",
      url: "www.google.com",
    },
  });
  // */

  const allLinks = await prisma.link.findMany();
  console.log(allLinks);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
