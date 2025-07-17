import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.city.createMany({
    data: [{ name: 'Tokyo' }, { name: 'Barcelona' }, { name: 'Melbourne' }],
    skipDuplicates: true,
  });
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(() => prisma.$disconnect());
