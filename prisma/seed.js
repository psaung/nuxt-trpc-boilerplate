import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();

const load = async () => {
  try {
    const admin = await prisma.user.upsert({
      where: { email: 'admin@gmail.com' },
      update: {},
      create: {
        email: 'admin@gmail.com',
        firstName: 'Admin',
        lastName: 'Admin',
        phone: '0999999999',
        password: bcrypt.hash('123', 10),
        role: 'Admin',
        address: 'somewhere',
      },
    });

    const user = await prisma.user.upsert({
      where: { email: 'user@gmail.com' },
      update: {},
      create: {
        email: 'user@gmail.com',
        firstName: 'User',
        lastName: 'User',
        phone: '0999999991',
        password: bcrypt.hash('123', 10),
        role: 'User',
        address: 'somewhere 123',
      },
    });

    console.log({ admin, user });
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
