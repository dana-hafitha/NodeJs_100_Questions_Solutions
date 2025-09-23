const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const userId = 1;

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { verified: true },
  });

  console.log(updatedUser);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
