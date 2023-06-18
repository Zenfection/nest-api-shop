//TODO This file is used to seed the database with dummy data.

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  //? Clear the database
  await prisma.user.deleteMany({});

  //? Create 2 new users
  const user1 = await prisma.user.upsert({
    where: { email: 'user123@gmail.com' },
    update: {},
    create: {
      email: 'user123@gmail.com',
      fullname: 'Trần Văn A',
      password: '123456',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'user456@gmail.com' },
    update: {},
    create: {
      email: 'user456@gmail.com',
      fullname: 'Nguyễn Văn B',
      password: '123456',
    },
  });

  console.log({ user1, user2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
