# Foodie Planner

This is a minimal prototype implementing a tiny portion of the Foodie Planner app described in `Proven Micro SaaS Ideas in the Travel Planner Nich.md`.

## Getting Started

```bash
pnpm install
pnpm prisma generate
pnpm prisma migrate dev --name init
pnpm prisma db seed
pnpm --filter foodie-planner-server dev
pnpm --filter foodie-planner-web dev
```

The web client runs on http://localhost:5173 and proxies API requests to http://localhost:4000.
