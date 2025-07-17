import request from 'supertest';
import express from 'express';
import { PrismaClient } from '@prisma/client';
import router from '../router';

const app = express();
app.use(express.json());
app.use(router);

jest.mock('@prisma/client', () => {
  const cities = [{ id: 1, name: 'Tokyo' }];
  return {
    PrismaClient: jest.fn(() => ({ city: { findMany: () => cities } })),
  };
});

describe('GET /api/cities', () => {
  it('returns cities', async () => {
    const res = await request(app).get('/api/cities');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: 1, name: 'Tokyo' }]);
  });
});
