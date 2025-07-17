import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

router.get('/api/cities', async (_req, res) => {
  const cities = await prisma.city.findMany();
  res.json(cities);
});

export default router;
