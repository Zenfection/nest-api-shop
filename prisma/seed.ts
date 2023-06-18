//TODO This file is used to seed the database with dummy data.

import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  const password_user1 = await bcrypt.hash('123456', roundsOfHashing);
  const password_user2 = await bcrypt.hash('111111', roundsOfHashing);

  //? Clear the database
  await prisma.user.deleteMany({});

  //? Create 2 new users
  const user1 = await prisma.user.upsert({
    where: { email: 'user123@gmail.com' },
    update: {
      password: password_user1,
    },
    create: {
      email: 'user123@gmail.com',
      fullname: 'Trần Văn A',
      password: password_user1,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'user456@gmail.com' },
    update: {
      password: password_user2,
    },
    create: {
      email: 'user456@gmail.com',
      fullname: 'Nguyễn Văn B',
      password: password_user2,
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
