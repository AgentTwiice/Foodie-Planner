declare module '@prisma/client' {
  export class PrismaClient {
    city: { findMany: () => any };
  }
}
