import prisma from "database";

async function createCustomer() {
  const customer = await prisma.customer.create({
    data: {
      firstName: "Geraldo Luiz",
      lastName: "Datena",
      document: "133.245.497-60",
    },
  });
  return customer;
}

async function main() {
  await createCustomer();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
