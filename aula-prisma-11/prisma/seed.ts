import prisma from "../src/database";

async function main() {
  const userData = [
    {
      name: "teste1",
      email: "teste1@gmail.com",
    },
    {
      name: "teste2",
      email: "teste2@gmail.com",
    },
    {
      name: "teste3",
      email: "teste3@gmail.com",
    },
    {
      name: "teste4",
      email: "teste4@gmail.com",
    },
    {
      name: "teste5",
      email: "teste5@gmail.com",
    },
  ];

  const createdUsers = await prisma.$transaction(
    userData.map((user) =>
      prisma.user.create({
        data: user,
      })
    )
  );
  return createdUsers;
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
