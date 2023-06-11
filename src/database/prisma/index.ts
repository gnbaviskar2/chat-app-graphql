import { PrismaClient } from '@prisma/client';

const prisma: PrismaClient = new PrismaClient({
  errorFormat: 'pretty',
  log: ['query', 'error', 'warn'],
});

export default prisma;
