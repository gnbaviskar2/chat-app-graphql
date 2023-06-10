import { Prisma, PrismaClient } from '@prisma/client';

const prisma: PrismaClient<
  Prisma.PrismaClientOptions,
  never,
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
> = new PrismaClient({
  errorFormat: 'pretty',
  log: ['query', 'error', 'warn'],
});

export default prisma;
